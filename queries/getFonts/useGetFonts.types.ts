export interface IFont {
  family: string;
  variants: string[];
  subsets: string[];

  category: string;
  files: IFontType;
}

export interface IFontType {
  regular: string;
  '300'?: string;
  '500'?: string;
  '600'?: string;
  '700'?: string;
}

export type TGoogleFontsResponse = {
  kind: string;
  items: IFont[];
};
