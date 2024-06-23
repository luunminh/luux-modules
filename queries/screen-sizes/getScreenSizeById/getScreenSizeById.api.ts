import { GetPropertiesParams, newCancelToken, stringify } from '@core/common';
import { httpService } from '@core/common/services/http';

const getScreenSizeById = (params: GetPropertiesParams) => {
  const { id, ...restParams } = params;
  const queryString = stringify(restParams);

  return httpService.get(`/screen-sizes/${id}?${queryString}`, {}, newCancelToken());
};

export { getScreenSizeById };
