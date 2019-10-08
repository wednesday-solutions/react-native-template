import { selectExampleDomain, selectUser, selectUserIsLoading, selectUserErrorMessage } from '../selectors';
import { fromJS } from 'immutable'
describe('selectHome', () => {
  let mockedState 
  let userState 
  let username
  let userIsLoading
  let userErrorMessage

  beforeEach(() => {
    username = 'Mohammed Ali Chherawalla';
    userErrorMessage = 'Some error bro'
    userIsLoading = false,
    
    mockedState = fromJS({
      user: {
        username,
      },
      userErrorMessage,
      userIsLoading
    })
  })
  
  it('should select the user state', () => {
    const userSelector = selectUser()
    expect(userSelector(mockedState)).toEqual({username});
  });

  it('should select the userIsLoading', () => {
    const userIsLoadingSelector = selectUserIsLoading();
    console.log(userIsLoadingSelector(mockedState))
    expect(userIsLoadingSelector(mockedState)).toEqual(userIsLoading);
  });
  it('should select the userErrorMessage', () => {
    const userErrorMessageSelector = selectUserErrorMessage();
    console.log(userErrorMessageSelector(mockedState))
    expect(userErrorMessageSelector(mockedState)).toEqual(userErrorMessage);
  });
});
