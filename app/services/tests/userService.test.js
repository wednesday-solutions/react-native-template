import MockAdapter from 'axios-mock-adapter';
import { generateApiClient } from 'app/utils/apiUtils';
import { getUser } from '../userService';

jest.mock('app/utils/apiUtils', () => ({
  generateApiClient: jest.fn(() => ({
    get: () =>
      Promise.resolve({
        data: [
          {
            quote: 'Thank you. Come again.',
            character: 'Mohammed Ali Chherawalla',
            image:
              'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
            characterDirection: 'Left'
          }
        ]
      })
  }))
}));

describe('UserService tests', () => {
  it('should make the api call to "/quotes?count=1"', async () => {
    const data = [
      {
        quote: 'Thank you. Come again.',
        character: 'Mohammed Ali Chherawalla',
        image:
          'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
        characterDirection: 'Left'
      }
    ];
    const res = await getUser();
    expect(res.data).toEqual(data);
  });
});
