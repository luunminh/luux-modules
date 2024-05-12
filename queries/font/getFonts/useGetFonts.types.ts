export interface IFont {
  family: string;
  variants: string[];
  subsets: string[];

  category: string;
  files: IFontType;
}

export interface IFontType {
  regular: string;
  '100'?: string;
  '200'?: string;
  '300'?: string;
  '400'?: string;
  '500'?: string;
  '600'?: string;
  '700'?: string;
  '800'?: string;
  '900'?: string;

  [key: string]: string;
}

export type TGoogleFontsResponse = {
  kind: string;
  items: IFont[];
};
