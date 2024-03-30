import dayjs, { Dayjs, OpUnitType, QUnitType } from 'dayjs';
import { isEmpty } from './validations';

export interface GetFromNowOptions {
  thresholdUnit?: QUnitType | OpUnitType;
  thresholdValue?: number;
  format?: string;
}

export const DateFormat = {
  DEFAULT: 'MM/DD/YYYY',
  MONTH_LONG_DATE_YEAR: 'MMMM DD, YYYY',
  YEAR_MONTH_DATE: 'YYYY-MM-DD',
  MONTH_DATE_YEAR: 'MMM DD, YYYY',
  MONTH_DATE_YEAR_TIME_24: 'MM/DD/YYYY HH:mm',
  MONTH_DATE_YEAR_TIME_12: 'MM/DD/YYYY hh:mm A',

  TIME_24: 'HH:mm',
  TIME_12: 'hh:mm A',
  TIME_24_SECOND: 'HH:mm:ss',
  HST_TIMEZONE: 'Pacific/Honolulu',

  TIME_SECOND_12_MONTH_LONG_DATE_YEAR: 'h:mm:ss A, MMMM DD, YYYY',
  MONTH_DATE_YEAR_TIME_SECOND_12: 'MM/DD/YYYY HH:MM:ss A',
  TIME_12_MONTH_DATE_YEAR: 'HH:mm MM-DD-YYYY',
  ISO_FORMAT_WITHOUT_TIMEZONE: 'YYYY-MM-DDTHH:mm:ss.sss',
};

/**
 * Get date display
 * @param {string|date|Dayjs} value
 * @param {string} languageCode
 */
export const getDateDisplay = (value: string, format: string = DateFormat.DEFAULT) =>
  value ? dayjs(value).format(format) : null;

/**
 * Get date display
 * @param {string|date|Dayjs} value
 * @param {string} languageCode
 */
export const getTimeDisplay = (value: string) => dayjs(value).format(DateFormat.TIME_24);

export const formatDate = (
  value: string | number | Date | dayjs.Dayjs,
  format = 'MM/DD/YYYY',
  { initValueFormat = '' } = {},
) => {
  if (isEmpty(value) || (typeof value === 'string' && value === 'null')) return '--';
  if (!isEmpty(initValueFormat)) {
    return dayjs(value, initValueFormat).format(format);
  }

  return dayjs(value).format(format);
};

export const getTimeDisplayFromNow = (value: string) => dayjs(value).fromNow();

/// dayjs has many cases incorrect format with timezone so using moment-timezone for this case
/// Reference issues : https://github.com/iamkun/dayjs/issues/1827
export const localTimeToHawaii = (
  dateTime: Dayjs | Date,
  format = DateFormat.MONTH_DATE_YEAR_TIME_24,
) => {
  if (!dateTime) return null;

  const date = dayjs(dateTime).format(DateFormat.MONTH_DATE_YEAR_TIME_24);
  return dayjs(date, DateFormat.MONTH_DATE_YEAR_TIME_24).tz(DateFormat.HST_TIMEZONE).format(format);
};

export const localTimeToHawaiiTz = (dateTime?: Date | string | Dayjs | undefined) => {
  dayjs.tz.setDefault(DateFormat.HST_TIMEZONE);
  const date = dayjs(dateTime).set('hour', 0).set('minute', 0).set('second', 0);
  return dayjs(date).tz();
};

export const formatDateUtc = (value: Date | string) => {
  if (!value || (typeof value === 'string' && isEmpty(value))) {
    return '';
  }
  return dayjs(value).utc().format();
};

export const formatSecondToTimer = (seconds: number, format = DateFormat.TIME_24_SECOND) => {
  if (!seconds) return `${format}`;
  const durationObject = dayjs.duration(seconds, 'seconds');
  const formattedTime = durationObject.format(format);
  return formattedTime;
};

export const getFromNow = (value: string, options?: GetFromNowOptions) => {
  if (!value) return null;

  const {
    thresholdUnit = 'hour',
    thresholdValue = 24,
    format = DateFormat.DEFAULT,
  } = options || {};
  const timeDifference = dayjs().diff(dayjs(value), thresholdUnit, true);
  if (timeDifference > thresholdValue) return dayjs(value).format(format);

  return dayjs(value).fromNow();
};

/**
 * Get timezone offset in minutes
 * @param timezone
 * @returns
 */
export const getTimezoneOffset = (timezone: string) => {
  // Set the timezone
  const now = dayjs().tz(timezone);

  // Get the timezone offset in minutes
  const offset = now.utcOffset();

  return offset;
};

export const isSameDate = (date1: string | Date | Dayjs, date2: string | Date | Dayjs) => {
  if (!date1 || !date2) return false;
  return dayjs(date1).isSame(dayjs(date2), 'day');
};

/**
 * Get week day
 * @param value - string
 * @returns dddd
 */
export const getWeekDay = (value: string) => {
  if (!value) return '';
  return dayjs(value).format('dddd');
};
