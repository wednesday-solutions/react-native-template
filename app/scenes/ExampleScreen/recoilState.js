import { atom, selector } from 'recoil';
import { getUser } from '@app/services/userService';
import { Errors } from '@app/utils/errors';
import { errorHandlerFunction } from '@app/utils/common';

const stateKeys = {
  USER_STATE: 'userState',
  USER_IS_LOADING_STATE: 'userIsLoadingState',
  USER_ERROR_MESSAGE_STATE: 'userErrorMessageState',
  FETCH_TRIGGER_STATE: 'fetchTriggerState',
  FETCH_USER_SELECTOR: 'fetchUserSelector'
};

// Atom to manage user state
export const userState = atom({
  key: stateKeys.USER_STATE,
  default: null
});

// Atom to manage loading state
export const userIsLoadingState = atom({
  key: stateKeys.USER_IS_LOADING_STATE,
  default: false
});

// Atom to manage error messages
export const userErrorMessageState = atom({
  key: stateKeys.USER_ERROR_MESSAGE_STATE,
  default: null
});

// Atom to trigger a fetch
export const fetchTriggerState = atom({
  key: stateKeys.FETCH_TRIGGER_STATE,
  default: 0 // This will be incremented to trigger re-fetching
});

// Selector to fetch user data
export const fetchUserSelector = selector({
  key: stateKeys.FETCH_USER_SELECTOR,
  get: async ({ get }) => {
    get(fetchTriggerState); // Read the trigger state to force re-fetch

    const response = await getUser();

    errorHandlerFunction(response, Errors.GET_USER_ERROR);
    const { data } = response;
    return data[0];
  }
});
