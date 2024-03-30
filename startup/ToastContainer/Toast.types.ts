import {
  ToastOptions as ReactToastOptions,
  ToastContainerProps as ReactToastifyProps,
} from 'react-toastify';

export type ToastContainerProps = ReactToastifyProps & {
  /**
   * The variant to use.
   * @default 'default'
   */
  variant?: 'default' | 'filled' | 'outlined';
};

export type ToastOptions = ReactToastOptions & {
  /**
   * The variant to use.
   * @default 'default'
   */
  variant?: 'default' | 'filled' | 'outlined';
};
