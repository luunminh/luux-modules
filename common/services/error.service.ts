import { ToastService } from '.';
import { isEmpty } from '../utils';

type AuthErrorCode =
  | 'UserNotConfirmedException'
  | 'NotAuthorizedException'
  | 'UserNotFoundException'
  | 'CodeMismatchException'
  | 'ExpiredCodeException'
  | 'LimitExceededException'
  | 'InvalidPasswordException'
  | 'InvalidParameterException'
  | 'UsernameExistsException';

export interface AuthError {
  code?: AuthErrorCode;
  name?: string;
  message?: string;
}

export interface ErrorResponse {
  code: number;
  error: string;
  errorId: string;
  message: string;
  path: string;
  stack: any;
  success: boolean;
  timestamp: number;
}

const MESSAGES = {
  invalidEmail: 'Email is invalid',
  forbidden: 'Forbidden resource',
  invalidPhone: 'Phone number is invalid',
  unknown: 'An error has occurred',
  required: 'This field is required',
  shortRequired: 'Required',
  accountNotExist: 'Username does not exist',
  accountExist: 'An account with this email already exists.',
  userExistError: 'User is already existed.',
  incorrectUsernameClientId: 'Username/client id combination not found.',
  incorrectUsername: 'Incorrect username',
  incorrectAccount: 'Incorrect username or password',
  incorrectCredentials: 'Incorrect login credentials. Please try again.',
  incorrectPassword: 'Incorrect password.', // pragma: allowlist secret
  onlyLetter: 'Only English alphabets are allowed for this field.',
  alphanumeric: 'Alphanumeric characters',
  noSpaces: 'No spaces',
  noSpecialCharacters: 'No special characters',
  invalidRoutingNumber: 'Invalid routing number',
  onlyLetterAndNumber: 'Only alphabets or numeric are allowed for this field.',
  notTrimmable: 'Space character is not allowed at the beginning and end.',
  pleaseUseEnglishAlphabetForInput: 'Please use English alphabet for input.',
  inValidUsername: 'Please use only letters, numbers (0-9), underscore (_), dot (.), hyphen (-).',
  invalidCode: 'Invalid verification code provided, please try again.',
  awsDisabledMessage: 'User is disabled.',
  disabledMessage: 'The user has been deactivated',
  existEmail: 'An account with this email already existed.',
  matchConfirmPassword: 'This Confirm Password does not match', // pragma: allowlist secret
  emailAddressAlreadyExisted: 'An account with this email already existed.',
  canNotBlank: 'This field cannot be blank.',
  noResult: 'No results found.',
  invalidDate: 'Invalid format date',
  invalidUserState: 'User password cannot be reset in the current state.',
  invalidUserStateMessage:
    'The account status for this user is invalid. Kindly reach out to the system administrator for assistance.',
  limitExceeded: 'Attempt limit exceeded, please try after some time.',
  incorrectExceededCode:
    'The code you entered is incorrect more than 5 times. Please try after few minutes or resend email to receive the new code.',
  expiredFirstSignInPassword:
    'Temporary password has expired and must be reset by an administrator.',
};

export const TYPES = {
  NotAuthorizedException: 'NotAuthorizedException',
  UserNotFoundException: 'UserNotFoundException',
  UserNotConfirmedException: 'UserNotConfirmedException',
  CodeMismatchException: 'CodeMismatchException',
  ExpiredCodeException: 'ExpiredCodeException',
  LimitExceededException: 'LimitExceededException',
  InvalidPasswordException: 'InvalidPasswordException', // pragma: allowlist secret
  UsernameExistsException: 'UsernameExistsException',
  UserLambdaValidationException: 'UserLambdaValidationException',
  badRequest: 'BAD_REQUEST',
  PasswordResetRequiredException: 'PasswordResetRequiredException',
};

const handler = (error: AuthError | Error | ErrorResponse, prefix = '') => {
  console.error(error);

  if (isEmpty(error)) {
    return ToastService.error(MESSAGES.unknown);
  }

  let errorMessage = prefix ? `${prefix}: ` : '';

  if (typeof error?.message === 'string') {
    errorMessage = `${errorMessage}${
      error?.message.includes(MESSAGES.limitExceeded)
        ? MESSAGES.incorrectExceededCode
        : error?.message
    }`;
  } else if (typeof error?.message === 'object') {
    errorMessage = `${errorMessage}${error?.message[0]}`;
  } else {
    errorMessage = `${errorMessage}${MESSAGES.unknown}`;
  }

  return ToastService.error(errorMessage);
};

const interceptorsErrorHandler = (error: (AuthError | Error) & { code?: string } = {}) => {
  console.error(error);
  const { message, code } = error;
  switch (code) {
    case TYPES.NotAuthorizedException:
    case TYPES.UserNotFoundException:
      if (message === MESSAGES.awsDisabledMessage) {
        return ToastService.error(MESSAGES.disabledMessage);
      }
      return handler(error);
    default:
      return handler(error);
  }
};

export default {
  handler,
  interceptorsErrorHandler,
  MESSAGES,
  TYPES,
};
