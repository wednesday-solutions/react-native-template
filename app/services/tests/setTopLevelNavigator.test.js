import { setTopLevelNavigator } from '@services/navigationService'; // Import the function to be tested

describe('setTopLevelNavigator', () => {
  it('should update navigatorObject with the provided navigatorRef using mocked Object.assign', () => {
    const mockNavigatorRef = { navigator: 'test_navigator' };
    const mockAssign = jest.spyOn(Object, 'assign');
    setTopLevelNavigator(mockNavigatorRef);
    expect(mockAssign).toHaveBeenCalledTimes(1);
    mockAssign.mockRestore();
  });
});
