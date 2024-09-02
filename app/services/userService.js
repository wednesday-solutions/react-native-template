import { generateApiClient } from '@app/utils/apiUtils';
import { set } from 'lodash';

const createApiClient = async () => await generateApiClient('configApi');
const getApiClient = async () => {
  if (!client.apiClient) {
    set(client, 'apiClient', createApiClient());
  }
  return client.apiClient;
};
const client = { apiClient: null };
export const getUser = async () => {
  const apiClient = await getApiClient();
  return apiClient.get('quotes?count=1');
};
