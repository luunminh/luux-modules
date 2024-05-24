import { newCancelToken, stringify } from '@core/common';
import { httpService } from '@core/common/services/http';
import { GetScreenSizeListParams } from './getScreenSizeList';

const getScreenSizeList = (params: GetScreenSizeListParams) => {
  const querystring = stringify(params);
  return httpService.get(`/screen-sizes?${querystring}`, {}, newCancelToken());
};

export { getScreenSizeList };
