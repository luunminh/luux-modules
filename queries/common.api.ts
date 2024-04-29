import { envConfigs } from '@config/env';
import { newCancelToken } from '@core/common';
import { httpService } from '@core/common/services/http';

const GOOGLE_FONT_API = 'https://www.googleapis.com/webfonts/v1/webfonts';

const getFonts = () => {
  return httpService.get(
    `${GOOGLE_FONT_API}?key=${envConfigs.GOOGLE_API_KEY}&sort=popularity&capability=WOFF2`,
    {},
    newCancelToken(),
  );
};

export { getFonts };
