import 'react-toastify/dist/ReactToastify.css';

import { COLOR_CODE } from '@core/common/config';
import cn from 'classnames';
import { ToastContainer as ReactToastContainer } from 'react-toastify';
import { defaultSeverity } from './Toast.helpers';
import { StyledToast } from './Toast.styles';
import { ToastContainerProps } from './Toast.types';

/**
 * - [Toast API](https://lms-react-ui.web.app/?path=/docs/feedback-toast--docs)
 */
const ToastContainer = ({
  className,
  autoClose = 5000,
  hideProgressBar = false,
  newestOnTop = false,
  rtl = false,
  variant = 'default',
  ...props
}: ToastContainerProps) => {
  return (
    <StyledToast colorCode={COLOR_CODE} hideProgressBar={hideProgressBar}>
      <ReactToastContainer
        className={className}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={newestOnTop}
        rtl={rtl}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={({ type }) => defaultSeverity()[type]?.icon}
        toastClassName={(prop) =>
          cn(
            prop?.defaultClassName,
            defaultSeverity(variant)[prop?.type || 'success'].defaultClassName,
          )
        }
        {...props}
      />
    </StyledToast>
  );
};

export default ToastContainer;
