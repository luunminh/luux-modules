import { GetPropertiesParams } from '@core/common';

export interface IFont {
  id: string;
  name: string;
  category: string;
  fontUrl: IFontUrl[];
}

export interface IFontUrl {
  type: string;
  url: string;
}

export type TGoogleFontsResponse = {
  kind: string;
  items: IFont[];
};

export interface IFontParams extends GetPropertiesParams {
  names?: string[];
  search?: string;
}

export interface IFontOptions {
  label: string;
  value: string;
  font: IFont;
}
