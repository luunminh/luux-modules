export interface IElementCategory {
  id: string;
  displayName: string;
  createdAt: string;
  updatedAt: string;
}

export enum IBaseElementCategory {
  SHAPE = 'Shape',
  GRAPHIC = 'Graphic',
  ICON = 'Icon',
  FRAME = 'Frame',
  STICKER = 'Sticker',
  TEXT = 'Text',
  TABLE = 'Table',
  CHART = 'Chart',
}