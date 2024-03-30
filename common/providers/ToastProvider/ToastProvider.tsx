import { ToastContainer } from '@core/startup';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

function ToastProvider({ children }: Props) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

export default ToastProvider;
