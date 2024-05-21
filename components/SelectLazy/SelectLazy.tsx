import { TableParams, isEmpty, useComponentDidMount } from '@core/common';
import { Select, SelectProps } from '@core/components';
import { unionBy } from 'lodash';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';

type SelectLazyProps = SelectProps & {
  defaultSelectedOptions?: any[];
  setParams?: Dispatch<SetStateAction<TableParams>>;
  fixedOptions?: any[];
  defaultParams?: TableParams;
  inputSearch?: string;
  errorMessage?: string;
};

const SelectLazy = ({
  hasNextPage,
  options,
  inputSearch,
  defaultSelectedOptions = [],
  defaultParams = {},
  fixedOptions = [],
  errorMessage = '',
  onChange,
  onFetchNextPage,
  onInputChange,
  setParams,
  ...props
}: SelectLazyProps) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions);

  const allOptions = useMemo(() => {
    const optionsIncludeFixed = !isEmpty(fixedOptions)
      ? unionBy(fixedOptions, options, 'value')
      : options;
    return !isEmpty(selectedOptions)
      ? unionBy(selectedOptions, optionsIncludeFixed, 'value')
      : optionsIncludeFixed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  useComponentDidMount(() => {
    if (setParams && defaultParams) {
      setParams(defaultParams);
    }
  });

  const handleOnChange = (name: string, option: any) => {
    setSelectedOptions([option]);
    onInputChange('', null);

    if (!!onChange) onChange(name, option ? option.value : null);
  };

  return (
    <Select
      isClearable={false}
      hasNextPage={hasNextPage}
      onFetchNextPage={onFetchNextPage}
      filterOption={null}
      options={allOptions}
      inputValue={inputSearch || ''}
      allowLazyLoading
      onInputChange={(val, meta) => {
        if (!['input-blur', 'menu-close', 'set-value'].includes(meta.action)) {
          onInputChange(val, meta);
        }
      }}
      keepOptionOnChange
      menuPosition="fixed"
      {...props}
      onChange={(name, option) => {
        handleOnChange(name, option);
      }}
      errorMessage={errorMessage}
    />
  );
};

export default SelectLazy;
