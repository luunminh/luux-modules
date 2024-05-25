import { FileInput, FileInputProps } from '@mantine/core';
import { UseControllerProps, useController } from 'react-hook-form';

const FormInputFile = ({ control, size = 'md', onChange, value, ...props }: FormInputFileProps) => {
  const { field, fieldState } = useController({ name: props.name, control });

  const handleOnChange = (file: File) => {
    if (onChange) {
      onChange?.(file);
    } else field.onChange(file);
  };

  return (
    <FileInput
      {...props}
      {...field}
      size={size}
      error={fieldState.error?.message}
      onChange={handleOnChange}
      value={value}
    />
  );
};

type FormInputFileProps<T = any> = UseControllerProps<T> & FileInputProps;

export default FormInputFile;
