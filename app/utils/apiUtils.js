import { create } from 'apisauce';
import mapKeysDeep from 'map-keys-deep';
import { camelCase, snakeCase } from 'lodash';
import { Config } from '@app/config/index';
const _ = require('lodash');
export const apiClients = {
  configApi: null,
  default: null
};
export const getApiClient = (type = 'configApi') => _.get(apiClients, type);
export const generateApiClient = (type = 'configApi') => {
  const apiClientOption = {
    configApi: () => {
      _.set(apiClients, type, createApiClientWithTransForm(Config.API_URL));
      return _.get(apiClients, type);
    },
    default: () => {
      _.set(
        apiClients,
        'default',
        createApiClientWithTransForm(Config.API_URL)
      );
      return apiClients.default;
    }
  };
  if (_.get(apiClientOption, type)) return _.get(apiClientOption, type)();
  return apiClientOption.default();
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
      _.set(
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
      _.set(
        request,
        'data',
        mapKeysDeep(data, keys => snakeCase(keys))
      );
    }
    return request;
  });
  return api;
};
