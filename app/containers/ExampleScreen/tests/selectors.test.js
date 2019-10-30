import { fromJS } from 'immutable';
import {
  selectUser,
  selectUserIsLoading,
  selectUserErrorMessage
} from '../selectors';

describe('Tests for selectors to get data from state for the ExampleScreen', () => {
  let mockedState;
  let username;
  let userIsLoading;
  let userErrorMessage;

  beforeEach(() => {
    username = 'Mohammed Ali Chherawalla';
    userErrorMessage = 'Some error';
    userIsLoading = false;

    mockedState = {
      example: fromJS({
        user: {
          username
        },
        userErrorMessage,
        userIsLoading
      })
    };
  });

  it('should select the user state', () => {
    const userSelector = selectUser();
    expect(userSelector(mockedState)).toEqual({ username });
  });

  it('should select userIsLoading', () => {
    const userIsLoadingSelector = selectUserIsLoading();
    expect(userIsLoadingSelector(mockedState)).toEqual(userIsLoading);
  });

  it('should select the userErrorMessage', () => {
    const userErrorMessageSelector = selectUserErrorMessage();
    expect(userErrorMessageSelector(mockedState)).toEqual(userErrorMessage);
  });
});
