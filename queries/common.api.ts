import { envConfigs } from '@config/env';
import { newCancelToken, stringify } from '@core/common';
import { httpService } from '@core/common/services/http';
import { IUploadAttachmentPayload } from './attachment';
import { IFontParams } from './font';

const GOOGLE_FONT_API = 'https://www.googleapis.com/webfonts/v1/webfonts';

const getFonts = (params: IFontParams) => {
  const querystring = stringify(params);
  return httpService.get(`/fonts?${querystring}`, {}, newCancelToken());
};

const getFont = ({ fontName }: { fontName: string }) => {
  return httpService.get(
    `${GOOGLE_FONT_API}?key=${envConfigs.GOOGLE_API_KEY}&sort=popularity&capability=WOFF2&family=${fontName}`,
    {},
    newCancelToken(),
  );
};

const uploadAttachment = (payload: IUploadAttachmentPayload) => {
  const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);

  let formattedPayload = new FormData();
  //@ts-ignore
  Object.keys(payload).map((key) => formattedPayload.append(key, payload[key]));

  return httpService.post(`/attachment/upload-file`, formattedPayload, {
    ...newCancelToken(),
    withCredentials: false,
    headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` },
  });
};

export { getFont, getFonts, uploadAttachment };
