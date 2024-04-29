import { PropsWithChildren } from 'react';
import { IntersectionOptions } from 'react-intersection-observer';

/**
 * - [LazyCheckPoint API](https://lms-react-ui.web.app/?path=/docs/utils-lazycheckpoint--docs)
 */
export type LazyCheckPointProps = PropsWithChildren & {
  /**
   * A function that gets triggered when the element is first visible.
   */
  onInView: (inView: boolean, entry: IntersectionObserverEntry) => void;

  useInViewProps?: IntersectionOptions;
};
