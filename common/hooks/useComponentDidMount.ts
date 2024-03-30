import { useEffect } from 'react';
import { Callback } from '../utils';

/**
 *
 * @param onMountHandler Callback
 *
 * @example
 * useComponentDidMount(() => {
 *   //your logic
 * })
 */
const useComponentDidMount = (onMountHandler: Callback) => {
  useEffect(() => {
    onMountHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useComponentDidMount;
