import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';
export const {
  Types: rootScreenTypes,
  Creators: rootScreenActions
} = createActions({
  // This action is triggered when the application starts
  startup: null
});

export const initialState = fromJS({
  app: null
});

export const rootContainerReducer = (state = initialState, action) =>
  produce(state, () => {
    const stateReturn = {
      [rootScreenTypes.STARTUP]: state
    };
    if (stateReturn[action.type]) return stateReturn[action.type];
    return state;
  });
