import { create } from 'apisauce';
import mapKeysDeep from 'map-keys-deep';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import { Config } from '@app/config/index';
import get from 'lodash/get';
export const apiClients = {
  configApi: null,
  default: null
};
export const getApiClient = (type = 'configApi') => apiClients[type];
export const generateApiClient = (type = 'configApi') => {
  switch (type) {
    case 'configApi':
      Object.assign(apiClients, {
        [type]: createApiClientWithTransForm(Config.API_URL)
      });
      return get(apiClients, type);
    default:
      Object.assign(apiClients, {
        default: createApiClientWithTransForm(Config.API_URL)
      });
      return apiClients.default;
  }
};

export const createApiClientWithTransForm = baseURL => {
  const api = create({
    baseURL,
    headers: { 'Content-Type': 'application/json' }
  });
  api.addResponseTransform(response => {
    const { ok, data } = response;
    if (ok && data) {
      Object.assign(response, {
        data: mapKeysDeep(data, keys => camelCase(keys))
      });
    }
    return response;
  });

  api.addRequestTransform(request => {
    const { data } = request;
    if (data) {
      Object.assign(request, {
        data: mapKeysDeep(data, keys => snakeCase(keys))
      });
    }
    return request;
  });
  return api;
};
