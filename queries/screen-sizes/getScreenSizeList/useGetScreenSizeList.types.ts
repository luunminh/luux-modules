import { GetPropertiesParams } from '@core/common';

export interface IScreenSize {
  id: string;
  name: string;
  width: number;
  height: number;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetScreenSizeListParams extends GetPropertiesParams {}
