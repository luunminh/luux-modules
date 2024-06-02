import { useEffect } from 'react';
import { Callback } from '../utils';

/**
 *
 * @param onUnmountHandler Callback
 *
 * @example
 * useComponentWillUnmount(() => {
 *   //your logic
 * })
 */
const useComponentWillUnmount = (onUnmountHandler: Callback) => {
  useEffect(
    () => () => {
      onUnmountHandler();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};

export default useComponentWillUnmount;
