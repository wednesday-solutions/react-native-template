import { fromJS } from 'immutable';
import {
  selectUser,
  selectUserIsLoading,
  selectUserErrorMessage
} from '../selectors';

const setupMockedState = () => {
  const username = 'Mohammed Ali Chherawalla';
  const userErrorMessage = 'Some error';
  const userIsLoading = false;
  return {
    username,
    userErrorMessage,
    userIsLoading,
    mockedState: {
      example: fromJS({
        user: {
          username
        },
        userErrorMessage,
        userIsLoading
      })
    }
  };
};
describe('Tests for selectors to get data from state for the ExampleScreen', () => {
  it('should select the user state', () => {
    const { mockedState, username } = setupMockedState();
    const userSelector = selectUser();
    expect(userSelector(mockedState)).toEqual({ username });
  });

  it('should select userIsLoading', () => {
    const { mockedState, userIsLoading } = setupMockedState();
    const userIsLoadingSelector = selectUserIsLoading();
    expect(userIsLoadingSelector(mockedState)).toEqual(userIsLoading);
  });

  it('should select the userErrorMessage', () => {
    const { mockedState, userErrorMessage } = setupMockedState();
    const userErrorMessageSelector = selectUserErrorMessage();
    expect(userErrorMessageSelector(mockedState)).toEqual(userErrorMessage);
  });
});
