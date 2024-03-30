/* eslint-disable no-console */
import { ToastOptions } from '@core/startup';
import { ReactNode } from 'react';
import { toast } from 'react-toastify';

const handleToast = (
  message: ReactNode,
  severity: 'error' | 'success' | 'warning' | 'info',
  options: ToastOptions,
) => {
  const className =
    options.variant && options.variant !== 'default'
      ? `Toastify__toast--${severity}--${options.variant}`
      : '';

  toast[severity](message, {
    ...options,
    className,
  });
};

const error = (error: ReactNode, options: ToastOptions = {}) => {
  console.log('errorHandler', error);
  handleToast(error, 'error', options);
};

const success = (message: ReactNode, options: ToastOptions = {}) => {
  handleToast(message, 'success', options);
};

const warning = (message: ReactNode, options: ToastOptions = {}) => {
  console.log('warningHandler', message);
  handleToast(message, 'warning', options);
};

const info = (message: ReactNode, options: ToastOptions = {}) => {
  handleToast(message, 'info', options);
};

const dismiss = () => {
  toast.dismiss();
};

export default {
  error,
  success,
  warning,
  info,
  dismiss,
};
