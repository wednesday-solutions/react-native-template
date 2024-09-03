import { generateApiClient } from '@app/utils/apiUtils';
import { set } from 'lodash';

const createApiClient = async () => await generateApiClient('configApi');
const getApiClient = async () => {
  try {
    if (!client.apiClient) {
      set(client, 'apiClient', createApiClient());
    }
    return client.apiClient;
  } catch (error) {
    throw new Error(error);
  }
};
const client = { apiClient: null };
export const getUser = async () => {
  try {
    const apiClient = await getApiClient();
    return apiClient.get('quotes?count=1');
  } catch (error) {
    throw new Error(error);
  }
};
