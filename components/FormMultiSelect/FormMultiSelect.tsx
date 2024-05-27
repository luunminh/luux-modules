import { MultiSelect, MultiSelectProps } from '@mantine/core';
import { UseControllerProps, useController } from 'react-hook-form';

const FormMultiSelect = ({ control, size = 'md', ...props }: FormMultiSelectProps) => {
  const { field, fieldState } = useController({ name: props.name, control });

  const handleOnChange = (val: string[]) => {
    field.onChange(val);
  };

  return (
    <MultiSelect
      {...props}
      {...field}
      size={size}
      error={fieldState.error?.message}
      onChange={handleOnChange}
    />
  );
};

type FormMultiSelectProps<T = any> = UseControllerProps<T> & MultiSelectProps;

export default FormMultiSelect;
