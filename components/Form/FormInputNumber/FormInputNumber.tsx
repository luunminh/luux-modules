import { NumberInput, NumberInputProps } from '@mantine/core';
import { UseControllerProps, useController } from 'react-hook-form';

const FormInputNumber = ({ control, size = 'md', ...props }: FormInputProps) => {
  const { field, fieldState } = useController({ name: props.name, control });

  return <NumberInput {...props} {...field} size={size} error={fieldState.error?.message} />;
};

type FormInputProps<T = any> = UseControllerProps<T> & NumberInputProps;

export default FormInputNumber;
