import { Callback } from '@core/common';
import { DetailedHTMLProps, FormHTMLAttributes, KeyboardEvent, PropsWithChildren } from 'react';

type Props = PropsWithChildren &
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    preventDefault?: boolean;
    customSubmit?: Callback;
  };

const Form = ({
  children,
  customSubmit,
  autoComplete = 'off',
  noValidate = true,
  preventDefault = true,
  ...props
}: Props) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (preventDefault && event.key === 'Enter') {
      event.preventDefault();
      customSubmit && customSubmit();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    customSubmit && customSubmit();
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <form
      onSubmit={handleSubmit}
      noValidate={noValidate}
      onKeyDown={handleKeyDown}
      autoComplete={autoComplete}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
