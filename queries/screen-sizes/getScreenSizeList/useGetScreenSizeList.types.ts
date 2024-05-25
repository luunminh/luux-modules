import { GetPropertiesParams } from '@core/common';

export enum IScreenSizeStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface IScreenSize {
  id: string;
  name: string;
  width: number;
  height: number;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string;
  status: IScreenSizeStatus | string;
}

export interface GetScreenSizeListParams extends GetPropertiesParams {
  screenSizeIds?: string[];
}
