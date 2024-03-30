import { BaseColorType, ColorCode } from './color.types';

const BaseColor: BaseColorType = {
  /*  /**=========== PRIMARY =========== */
  PRIMARY_00: '#F1F8FC',
  PRIMARY_50: '#CBE7F6',
  PRIMARY_100: '#9AC8E5',
  PRIMARY_200: '#68B1D9',
  PRIMARY_300: '#378EC5',
  PRIMARY_400: '#005FA9',
  PRIMARY_500: '#005598',
  PRIMARY_600: '#004E91',
  PRIMARY_700: '#00427C',
  PRIMARY_800: '#013B71',
  PRIMARY_900: '#00274B',
  /*  /**======== PRIMARY =========== */

  /*  /**=========== SECONDARY =========== */
  SECONDARY_00: '#FF0099',
  SECONDARY_50: '#FFD7F4',
  SECONDARY_100: '#FFB8EB',
  SECONDARY_200: '#FF5BDC',
  SECONDARY_300: '#F116BE',
  SECONDARY_400: '#DB009E',
  SECONDARY_500: '#BC0092',
  SECONDARY_600: '#9E0073',
  SECONDARY_700: '#82005D',
  SECONDARY_800: '#5A0042',
  SECONDARY_900: '#3B002B',
  /*  /**======== SECONDARY =========== */

  /*   /**=========== GRAY =========== */
  GRAY_00: '#FFFFFF',
  GRAY_50: '#F8F8F9',
  GRAY_100: '#EDEFF1',
  GRAY_200: '#DEE1E5',
  GRAY_300: '#CFD4D9',
  GRAY_400: '#B5BDC5',
  GRAY_500: '#91979E',
  GRAY_600: '#6D7176',
  GRAY_700: '#484C4F',
  GRAY_800: '#2D2F31',
  GRAY_900: '#1B1C1E',
  /*   /**======== GRAY =========== */

  /*   /**=========== RED =========== */
  RED_00: '#FFE6E5',
  RED_50: '#FFD1D0',
  RED_100: '#FFAFAC',
  RED_200: '#FF8480',
  RED_300: '#FF5755',
  RED_400: '#FF3235',
  RED_500: '#E51F23',
  RED_600: '#C01218',
  RED_700: '#9A0611',
  RED_800: '#70030A',
  RED_900: '#460104',
  /*   /**=========== RED =========== */

  /*   /**=========== ORANGE =========== */
  ORANGE_00: '#FFF8DA',
  ORANGE_50: '#FFF2BA',
  ORANGE_100: '#FFE88A',
  ORANGE_200: '#FFD654',
  ORANGE_300: '#FFBC23',
  ORANGE_400: '#FF9B00',
  ORANGE_500: '#E47E00',
  ORANGE_600: '#C45E00',
  ORANGE_700: '#A13D00',
  ORANGE_800: '#791E00',
  ORANGE_900: '#4E0600',
  /*   /**=========== ORANGE =========== */

  /*   /**=========== YELLOW =========== */
  YELLOW_00: '#FFFDE9',
  YELLOW_50: '#FFFAD5',
  YELLOW_100: '#FFF6B6',
  YELLOW_200: '#FFEE8D',
  YELLOW_300: '#FFE25F',
  YELLOW_400: '#FFCF36',
  YELLOW_500: '#E4B31E',
  YELLOW_600: '#C4930B',
  YELLOW_700: '#A17102',
  YELLOW_800: '#794B00',
  YELLOW_900: '#4E2500',
  /*   /**=========== YELLOW =========== */

  /*   /**=========== TEAL =========== */
  TEAL_00: '#DFFDF9',
  TEAL_50: '#C2FAF6',
  TEAL_100: '#97F6ED',
  TEAL_200: '#66EFDF',
  TEAL_300: '#34E3CA',
  TEAL_400: '#0FD0AD',
  TEAL_500: '#03B391',
  TEAL_600: '#009371',
  TEAL_700: '#007150',
  TEAL_800: '#004B2E',
  TEAL_900: '#002510',
  /*   /**=========== TEAL =========== */

  /*   /**=========== CYAN =========== */
  CYAN_00: '#DAF9FF',
  CYAN_50: '#BAF6FF',
  CYAN_100: '#8AEDFF',
  CYAN_200: '#54DFFF',
  CYAN_300: '#23CAFF',
  CYAN_400: '#00ADFF',
  CYAN_500: '#0091E5',
  CYAN_600: '#0071C7',
  CYAN_700: '#004EA3',
  CYAN_800: '#002B7C',
  CYAN_900: '#000E52',
  /*   /**=========== CYAN =========== */

  /*   /**=========== BLUE =========== */
  BLUE_00: '#DAF2FD',
  BLUE_50: '#BAE5FB',
  BLUE_100: '#8AD1F8',
  BLUE_200: '#54B3F2',
  BLUE_300: '#238DE9',
  BLUE_400: '#0164D9',
  BLUE_500: '#0048BE',
  BLUE_600: '#002B9F',
  BLUE_700: '#00127C',
  BLUE_800: '#000356',
  BLUE_900: '#000031',
  /*   /**=========== BLUE =========== */

  /*   /**=========== PURPLE =========== */
  PURPLE_00: '#FBF2FF',
  PURPLE_50: '#F6E5FF',
  PURPLE_100: '#EFD1FF',
  PURPLE_200: '#E3B3FF',
  PURPLE_300: '#CF8DFF',
  PURPLE_400: '#B364FF',
  PURPLE_500: '#9648E5',
  PURPLE_600: '#752BC7',
  PURPLE_700: '#5312A3',
  PURPLE_800: '#31037C',
  PURPLE_900: '#110052',
  /*   /**=========== PURPLE =========== */

  /*   /**=========== GREEN =========== */
  GREEN_00: '#E0FDE0',
  GREEN_50: '#C6FAC6',
  GREEN_100: '#9EF69E',
  GREEN_200: '#6DEF6D',
  GREEN_300: '#3CE33C',
  GREEN_400: '#16D016',
  GREEN_500: '#06B307',
  GREEN_600: '#019301',
  GREEN_700: '#007100',
  GREEN_800: '#004B00',
  GREEN_900: '#002500',
  /*   /**=========== GREEN =========== */
};

export const COLOR_CODE: ColorCode = {
  ...BaseColor,

  /*   /**=========== PRIMARY =========== */
  PRIMARY: BaseColor.PRIMARY_400,
  PRIMARY_DARK: BaseColor.PRIMARY_900,
  PRIMARY_LIGHT: BaseColor.PRIMARY_300,
  LINK: BaseColor.PRIMARY_400,
  /*   /**=========== PRIMARY =========== */

  /*   /**=========== SECONDARY =========== */
  SECONDARY: BaseColor.SECONDARY_400,
  SECONDARY_DARK: BaseColor.SECONDARY_900,
  SECONDARY_LIGHT: BaseColor.SECONDARY_300,
  /*   /**=========== SECONDARY =========== */

  WHITE: BaseColor.GRAY_00,

  /*   /**=========== SUCCESS =========== */
  SUCCESS: 'rgb(23, 207, 151)',
  SUCCESS_BG: BaseColor.GREEN_00,
  SUCCESS_FG: BaseColor.GREEN_700,
  SUCCESS_HOVER: BaseColor.GREEN_400,
  /*   /**=========== SUCCESS =========== */

  /*   /**=========== INFO & ACTIVE =========== */
  INFO: '#4782db',
  INFO_BG: BaseColor.CYAN_00,
  INFO_FG: BaseColor.CYAN_700,
  INFO_HOVER: BaseColor.CYAN_400,
  ACTIVE: BaseColor.CYAN_500,
  ACTIVE_BG: BaseColor.CYAN_00,
  ACTIVE_FG: BaseColor.CYAN_700,
  ACTIVE_HOVER: BaseColor.CYAN_400,
  /*   /**=========== INFO & ACTIVE =========== */

  /*   /**=========== INACTIVE & DISABLED =========== */
  INACTIVE: BaseColor.GRAY_600,
  INACTIVE_BG: BaseColor.GRAY_50,
  INACTIVE_FG: BaseColor.GRAY_800,
  INACTIVE_HOVER: BaseColor.GRAY_500,
  DISABLED: BaseColor.GRAY_600,
  DISABLED_BG: BaseColor.GRAY_50,
  DISABLED_FG: BaseColor.GRAY_800,
  DISABLED_HOVER: BaseColor.GRAY_500,
  /*   /**=========== INACTIVE & DISABLED =========== */

  /*   /**=========== DANGER =========== */
  DANGER: BaseColor.RED_500,
  DANGER_BG: BaseColor.RED_00,
  DANGER_FG: BaseColor.RED_700,
  DANGER_HOVER: BaseColor.RED_400,
  /*   /**=========== DANGER =========== */

  /*   /**=========== WARNING =========== */
  WARNING: '#FFD985',
  WARNING_BG: BaseColor.ORANGE_00,
  WARNING_FG: BaseColor.ORANGE_700,
  WARNING_HOVER: BaseColor.ORANGE_400,
  /*   /**=========== WARNING =========== */

  /*   /**=========== BORDER_RADIUS =========== */
  BORDER_RADIUS_DEFAULT: '8px',
  BORDER_RADIUS_4: '4px',
  BORDER_RADIUS_8: '8px',
  BORDER_RADIUS_16: '16px',
  /*   /**=========== BORDER_RADIUS =========== */

  /*   /**=========== BORDER =========== */
  BORDER_DEFAULT: `1px solid ${BaseColor.GRAY_100}`,
  BORDER_SECTION: `1px solid ${BaseColor.GRAY_200}`,
  BORDER_DEFAULT_FOCUS: `1px solid ${BaseColor.GRAY_700}`,
  BORDER_DEFAULT_TABLE_ERROR: `3px solid ${BaseColor.RED_500}`,
  BORDER_DEFAULT_ROW_ERROR: `2px solid ${BaseColor.RED_500}`,
  BORDER_DEFAULT_HOVER: `1px solid ${BaseColor.PRIMARY_200}`,
  /*   /**=========== BORDER =========== */

  /*   /**=========== BACKGROUND_COLOR =========== */
  BG_INPUT: BaseColor.GRAY_00,
  BG_INPUT_DISABLED: BaseColor.GRAY_100,
  BG_INPUT_HIGHLIGHT: BaseColor.PRIMARY_50,
  BG_PAGE: BaseColor.GRAY_50,
  BG_SIDEBAR: BaseColor.PRIMARY_900,
  BG_SURFACE: BaseColor.GRAY_00,
  BG_SURFACE_HIGHLIGHTED: BaseColor.YELLOW_00,
  BG_SURFACE_HOVER: BaseColor.PRIMARY_00,
  BG_SURFACE_HOVER_EMPHASIZED: BaseColor.PRIMARY_100,
  BG_SURFACE_HOVER_GRAY: BaseColor.GRAY_100,
  BG_SURFACE_PRESS: BaseColor.GRAY_300,
  BG_SURFACE_TABLE_HEADER: BaseColor.GRAY_100,
  BG_SURFACE_TABLE_HEADER_HOVER: BaseColor.GRAY_50,
  BG_SWITCH_OFF: BaseColor.GRAY_500,
  BG_SWITCH_OFF_HOVER: BaseColor.GRAY_400,
  BG_SWITCH_ON: BaseColor.PRIMARY_400,
  BG_SWITCH_ON_HOVER: BaseColor.PRIMARY_300,
  BG_TOOLTIP: BaseColor.GRAY_700,
  /*   /**=========== BACKGROUND_COLOR =========== */

  /*   /**=========== TEXT =========== */
  TEXT_BODY: BaseColor.GRAY_800,
  TEXT_BODY_INVERT: BaseColor.GRAY_100,
  TEXT_CONTROL: BaseColor.GRAY_700,
  TEXT_DISABLED: BaseColor.GRAY_400,
  TEXT_DISABLED_EMPHASIZED: BaseColor.GRAY_500,
  TEXT_DISABLED_UNDEREMPHASIZED: BaseColor.GRAY_200,
  TEXT_EMPHASIZED: BaseColor.GRAY_900,
  TEXT_LABEL: BaseColor.GRAY_800,
  TEXT_HEADER: BaseColor.GRAY_800,
  /*   /**=========== TEXT =========== */

  /*   /**=========== BOX-SHADOW =========== */
  BOX_SHADOW_INPUT_FOCUS: `0px 0px 0px 3px rgba(102, 178, 255, 0.80)`,
  /*   /**=========== BOX-SHADOW =========== */

  /*   /**=========== TABLE =========== */
  TABLE_HEADER_BG: BaseColor.GRAY_50,
  TABLE_ROW_BG_HOVER: BaseColor.GRAY_200,
  TABLE_HEADER_TEXT: BaseColor.GRAY_800,
  /*   /**=========== TABLE =========== */
};
