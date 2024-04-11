import { create } from 'apisauce';
import mapKeysDeep from 'map-keys-deep';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import set from 'lodash/set';
import get from 'lodash/get';
import { Config } from '@app/config/index';
export const apiClients = {
  configApi: null,
  default: null
};
export const getApiClient = (type = 'configApi') => get(apiClients, type);
export const generateApiClient = (type = 'configApi') => {
  const apiClientOption = {
    configApi: () => {
      set(apiClients, type, createApiClientWithTransForm(Config.API_URL));
      return get(apiClients, type);
    },
    default: () => {
      set(apiClients, 'default', createApiClientWithTransForm(Config.API_URL));
      return apiClients.default;
    }
  };
  const clientGenerator = get(apiClientOption, type, apiClientOption.default);
  return clientGenerator();
};

export const createApiClientWithTransForm = baseURL => {
  const api = create({
    baseURL,
    headers: { 'Content-Type': 'application/json' }
  });

  // eslint-disable-next-line complexity
  api.addResponseTransform(response => {
    const { ok, data } = response;
    if (ok && data) {
      set(
        response,
        'data',
        mapKeysDeep(data, keys => camelCase(keys))
      );
    }
    return response;
  });

  api.addRequestTransform(request => {
    const { data } = request;
    if (data) {
      set(
        request,
        'data',
        mapKeysDeep(data, keys => snakeCase(keys))
      );
    }
    return request;
  });
  return api;
};
