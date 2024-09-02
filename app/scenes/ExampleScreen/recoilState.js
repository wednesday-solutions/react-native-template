import { atom, selector } from 'recoil';
import { getUser } from '@app/services/userService';
import { Errors } from '@app/utils/erros';

// Atom to manage user state
export const userState = atom({
  key: 'userState',
  default: null
});

// Atom to manage loading state
export const userIsLoadingState = atom({
  key: 'userIsLoadingState',
  default: false
});

// Atom to manage error messages
export const userErrorMessageState = atom({
  key: 'userErrorMessageState',
  default: null
});

// Atom to trigger a fetch
export const fetchTriggerState = atom({
  key: 'fetchTriggerState',
  default: 0 // This will be incremented to trigger re-fetching
});

// Selector to fetch user data
export const fetchUserSelector = selector({
  key: 'fetchUserSelector',
  get: async ({ get }) => {
    get(fetchTriggerState); // Read the trigger state to force re-fetch

    const response = await getUser();

    if (!response.ok) {
      throw new Error(Errors.USER_FETCH_ERROR);
    }
    const { data } = response;
    return data[0];
  }
});
