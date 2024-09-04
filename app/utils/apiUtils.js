/* eslint-disable sonarjs/no-small-switch */
/* eslint-disable fp/no-mutating-assign */
import axios from 'axios';
import mapKeysDeep from 'map-keys-deep';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import { Config } from '@app/config/index';
import get from 'lodash/get';
import { set } from 'lodash';

export const apiClients = {
  configApi: null,
  default: null
};

export const getApiClient = (type = 'configApi') =>
  get(apiClients, type, apiClients.default);

export const generateApiClient = (type = 'configApi') => {
  switch (type) {
    case 'configApi':
      set(apiClients, type, createApiClientWithTransForm(Config.API_URL));

      return get(apiClients, type);
    default:
      set(apiClients, 'default', createApiClientWithTransForm(Config.API_URL));
      return apiClients.default;
  }
};

export const createApiClientWithTransForm = baseURL => {
  try {
    const api = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' }
    });

    // Response interceptor to transform keys to camelCase and structure response
    api.interceptors.response.use(
      response => {
        const { data } = response;
        if (data) {
          const keysData = mapKeysDeep(data, keys => camelCase(keys));
          return {
            ok: true,
            data: keysData,
            error: null,
            originalResponse: response
          };
        }
        return {
          ok: true,
          data: response.data,
          error: null,
          originalResponse: response
        };
      },
      error => ({
        ok: false,
        data: null,
        error: error || 'Something went wrong',
        originalResponse: error.response
      })
    );

    // Request interceptor to transform keys to snake_case
    api.interceptors.request.use(request => {
      const { data } = request;
      if (data) {
        const keysData = mapKeysDeep(data, keys => snakeCase(keys));
        return { ...request, data: keysData };
      }
      return request;
    });

    return api;
  } catch (err) {
    throw new Error(err);
  }
};
