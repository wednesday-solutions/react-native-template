import { atom } from 'recoil';

const stateKeys = {
  APP_STATE: 'appState'
};

export const appState = atom({
  key: stateKeys.APP_STATE,
  default: null
});
