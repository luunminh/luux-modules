import { FormMultiSelect } from '../FormMultiSelect';
import { FormInput } from './FormInput';
import { FormInputFile } from './FormInputFile';
import FormInputNumber from './FormInputNumber';
import { FormInputOtp } from './FormInputOtp';
import { FormInputPassword } from './FormInputPassword';
import { FormSelect } from './FormSelect';
import { FormWrapper } from './FormWrapper';

const Form = {
  Wrapper: FormWrapper,
  Input: FormInput,
  InputPassword: FormInputPassword,
  InputOtp: FormInputOtp,
  InputNumber: FormInputNumber,
  InputFile: FormInputFile,
  Select: FormSelect,
  MultiSelect: FormMultiSelect,
};

export default Form;
