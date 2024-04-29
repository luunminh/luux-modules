import { useInView } from 'react-intersection-observer';
import { LazyCheckPointProps } from '.';

/**
 * `import { LazyCheckPoint } from '@puravida/react-ui'`
 *
 * - [LazyCheckPoint API](https://lms-react-ui.web.app/?path=/docs/utils-lazycheckpoint--docs)
 */
const LazyCheckPoint = ({ children, onInView, useInViewProps, ...props }: LazyCheckPointProps) => {
  const { ref } = useInView({
    onChange(inView, entry) {
      if (inView) {
        onInView(inView, entry);
      }
    },
    ...useInViewProps,
  });

  return (
    <div data-name="lazy-checkpoint" {...props} ref={ref}>
      {children}
    </div>
  );
};

export default LazyCheckPoint;
