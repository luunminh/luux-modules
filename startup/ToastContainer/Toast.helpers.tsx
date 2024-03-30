import { BsCheckCircle as SuccessIcon } from 'react-icons/bs';
import { FiInfo as InfoIcon } from 'react-icons/fi';
import { ImWarning as WarningIcon } from 'react-icons/im';
import { PiWarningCircle as ErrorIcon } from 'react-icons/pi';

const defaultSeverity = (variant: 'default' | 'filled' | 'outlined' = 'default') => ({
  success: {
    icon: <SuccessIcon />,
    defaultClassName: `${variant !== 'default' ? `Toastify__toast--success--${variant}` : ''}`,
  },
  error: {
    icon: <ErrorIcon />,
    defaultClassName: `${variant !== 'default' ? `Toastify__toast--error--${variant}` : ''}`,
  },
  info: {
    icon: <InfoIcon />,
    defaultClassName: `${variant !== 'default' ? `Toastify__toast--info--${variant}` : ''}`,
  },
  warning: {
    icon: <WarningIcon />,
    defaultClassName: `${variant !== 'default' ? `Toastify__toast--warning--${variant}` : ''}`,
  },
  default: {
    icon: null as any,
    defaultClassName: `${variant !== 'default' ? `Toastify__toast--default--${variant}` : ''}`,
  },
});

export { defaultSeverity };
