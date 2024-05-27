import { Select, SelectProps } from '@mantine/core';
import { UseControllerProps, useController } from 'react-hook-form';

const FormSelect = ({ control, size = 'md', ...props }: FormSelectProps) => {
  const { field, fieldState } = useController({ name: props.name, control });

  return <Select {...props} {...field} size={size} error={fieldState.error?.message} />;
};

type FormSelectProps<T = any> = UseControllerProps<T> & SelectProps;

export default FormSelect;
