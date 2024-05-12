import { GetPropertiesParams, newCancelToken, stringify } from '@core/common';
import { httpService } from '@core/common/services/http';

const getElementCategories = (params: GetPropertiesParams) => {
  const queryString = stringify(params);
  return httpService.get(`/elements/categories?${queryString}`, {}, newCancelToken());
};

export { getElementCategories };
