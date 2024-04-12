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
    switch (action.type) {
      default:
        return state;
    }
  });
