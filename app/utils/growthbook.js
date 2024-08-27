import { GrowthBook } from '@growthbook/growthbook';
import { GROWTH_BOOK_API_HOST, GROWTH_BOOK_CLIENT_KEY } from '@env';

let growthBookClient;

/**
 * creates an instance of the growthBook client
 * @returns growthBook client
 */
export const createGrowthBookClient = userEmail => {
  const growthBook = new GrowthBook({
    apiHost: GROWTH_BOOK_API_HOST,
    clientKey: GROWTH_BOOK_CLIENT_KEY,
    enableDevMode: true,
    subscribeToChanges: true
  });

  growthBook.setAttributes({
    email: userEmail
  });

  return growthBook;
};

/**
 *  Function to get the GrowthBook client instance
 * @returns {GrowthBook} growthBook instance
 */
export function getGrowthBookClient(email) {
  if (growthBookClient) {
    return growthBookClient;
  }
  return createGrowthBookClient(email);
}

/**
 * Function to get  growthBook feature
 * @param {String} email
 * @returns {Applicant}  growthBook feature value
 */
export async function getGrowthBookFeaturesData(name, email) {
  try {
    const growthBook = getGrowthBookClient(email);
    await growthBook.loadFeatures();
    return growthBook.getFeatureValue(name);
  } catch (error) {
    return new Error(error);
  }
}

/**
 * Function to get growthBook feature
 * @param {String} name
 * @returns {Boolean} growthBook feature status
 */
export async function getGrowthBookFeatureFlag(name, email) {
  try {
    const growthBook = getGrowthBookClient(email);
    await growthBook.loadFeatures();
    return growthBook.isOn(name);
  } catch (error) {
    return new Error(error);
  }
}
