import { ComponentProps, ComponentType, memo } from 'react';

type PropsComparator<C extends ComponentType> = (
  prevProps: Readonly<ComponentProps<C>>,
  nextProps: Readonly<ComponentProps<C>>,
) => boolean;

/**
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087#
 */
export function typedMemo<C extends ComponentType<any>>(
  Component: C,
  propsComparator?: PropsComparator<C>,
) {
  return memo(Component, propsComparator) as any as C;
}

export interface OptionType {
  label: string;
  value: string;
  [key: string]: any;
}

export enum YesNoValue {
  YES = 'YES',
  NO = 'NO',
}

export enum FileType {
  Image = 'IMAGE',
  Document = 'DOCUMENT',
  External = 'EXTERNAL_LINK',
  EmailConfirmation = 'EMAIL_CONFIRMATION',
}

export interface UploadFileType {
  id: string;
  file?: File & { path?: string };
  url?: string;
  name?: string;
  isExternalLink?: boolean;
  type: FileType;
  entityId?: string;
}

export type TableParams = {
  skip?: number;
  take?: number;
  order?: string;
  search?: string;
  sort?: string;
  [key: string]: number | boolean | string | string[] | undefined;
};

export type GetPropertiesParams = TableParams & {
  [key: string]: string | number | string[] | boolean;
};

export type Callback<T = any> = (..._args: T[]) => any | Promise<any> | void;
