export type BaseColorType = {
  /*  /**=========== PRIMARY =========== */
  PRIMARY_00: string;
  PRIMARY_50: string;
  PRIMARY_100: string;
  PRIMARY_200: string;
  PRIMARY_300: string;
  PRIMARY_400: string;
  PRIMARY_500: string;
  PRIMARY_600: string;
  PRIMARY_700: string;
  PRIMARY_800: string;
  PRIMARY_900: string;
  /*  /**======== PRIMARY =========== */

  /*  /**=========== SECONDARY =========== */
  SECONDARY_00: string;
  SECONDARY_50: string;
  SECONDARY_100: string;
  SECONDARY_200: string;
  SECONDARY_300: string;
  SECONDARY_400: string;
  SECONDARY_500: string;
  SECONDARY_600: string;
  SECONDARY_700: string;
  SECONDARY_800: string;
  SECONDARY_900: string;
  /*  /**======== SECONDARY =========== */

  /*   /**=========== GRAY =========== */
  GRAY_00: string;
  GRAY_50: string;
  GRAY_100: string;
  GRAY_200: string;
  GRAY_300: string;
  GRAY_400: string;
  GRAY_500: string;
  GRAY_600: string;
  GRAY_700: string;
  GRAY_800: string;
  GRAY_900: string;
  /*   /**======== GRAY =========== */

  /*   /**=========== RED =========== */
  RED_00: string;
  RED_50: string;
  RED_100: string;
  RED_200: string;
  RED_300: string;
  RED_400: string;
  RED_500: string;
  RED_600: string;
  RED_700: string;
  RED_800: string;
  RED_900: string;
  /*   /**=========== RED =========== */

  /*   /**=========== ORANGE =========== */
  ORANGE_00: string;
  ORANGE_50: string;
  ORANGE_100: string;
  ORANGE_200: string;
  ORANGE_300: string;
  ORANGE_400: string;
  ORANGE_500: string;
  ORANGE_600: string;
  ORANGE_700: string;
  ORANGE_800: string;
  ORANGE_900: string;
  /*   /**=========== ORANGE =========== */

  /*   /**=========== YELLOW =========== */
  YELLOW_00: string;
  YELLOW_50: string;
  YELLOW_100: string;
  YELLOW_200: string;
  YELLOW_300: string;
  YELLOW_400: string;
  YELLOW_500: string;
  YELLOW_600: string;
  YELLOW_700: string;
  YELLOW_800: string;
  YELLOW_900: string;
  /*   /**=========== YELLOW =========== */

  /*   /**=========== TEAL =========== */
  TEAL_00: string;
  TEAL_50: string;
  TEAL_100: string;
  TEAL_200: string;
  TEAL_300: string;
  TEAL_400: string;
  TEAL_500: string;
  TEAL_600: string;
  TEAL_700: string;
  TEAL_800: string;
  TEAL_900: string;
  /*   /**=========== TEAL =========== */

  /*   /**=========== CYAN =========== */
  CYAN_00: string;
  CYAN_50: string;
  CYAN_100: string;
  CYAN_200: string;
  CYAN_300: string;
  CYAN_400: string;
  CYAN_500: string;
  CYAN_600: string;
  CYAN_700: string;
  CYAN_800: string;
  CYAN_900: string;
  /*   /**=========== CYAN =========== */

  /*   /**=========== BLUE =========== */
  BLUE_00: string;
  BLUE_50: string;
  BLUE_100: string;
  BLUE_200: string;
  BLUE_300: string;
  BLUE_400: string;
  BLUE_500: string;
  BLUE_600: string;
  BLUE_700: string;
  BLUE_800: string;
  BLUE_900: string;
  /*   /**=========== BLUE =========== */

  /*   /**=========== PURPLE =========== */
  PURPLE_00: string;
  PURPLE_50: string;
  PURPLE_100: string;
  PURPLE_200: string;
  PURPLE_300: string;
  PURPLE_400: string;
  PURPLE_500: string;
  PURPLE_600: string;
  PURPLE_700: string;
  PURPLE_800: string;
  PURPLE_900: string;
  /*   /**=========== PURPLE =========== */

  /*   /**=========== GREEN =========== */
  GREEN_00: string;
  GREEN_50: string;
  GREEN_100: string;
  GREEN_200: string;
  GREEN_300: string;
  GREEN_400: string;
  GREEN_500: string;
  GREEN_600: string;
  GREEN_700: string;
  GREEN_800: string;
  GREEN_900: string;
  /*   /**=========== GREEN =========== */

  [key: string]: string;
};

export type ColorCode = BaseColorType & {
  /*   /**=========== PRIMARY =========== */
  PRIMARY: string;
  PRIMARY_DARK: string;
  PRIMARY_LIGHT: string;
  LINK: string;
  /*   /**=========== PRIMARY =========== */

  /*   /**=========== SECONDARY =========== */
  SECONDARY: string;
  SECONDARY_DARK: string;
  SECONDARY_LIGHT: string;
  /*   /**=========== SECONDARY =========== */

  WHITE: string;

  /*   /**=========== SUCCESS =========== */
  SUCCESS: string;
  SUCCESS_BG: string;
  SUCCESS_FG: string;
  SUCCESS_HOVER: string;
  /*   /**=========== SUCCESS =========== */

  /*   /**=========== INFO & ACTIVE =========== */
  INFO: string;
  INFO_BG: string;
  INFO_FG: string;
  INFO_HOVER: string;
  ACTIVE: string;
  ACTIVE_BG: string;
  ACTIVE_FG: string;
  ACTIVE_HOVER: string;
  /*   /**=========== INFO & ACTIVE =========== */

  /*   /**=========== INACTIVE & DISABLED =========== */
  INACTIVE: string;
  INACTIVE_BG: string;
  INACTIVE_FG: string;
  INACTIVE_HOVER: string;
  DISABLED: string;
  DISABLED_BG: string;
  DISABLED_FG: string;
  DISABLED_HOVER: string;
  /*   /**=========== INACTIVE & DISABLED =========== */

  /*   /**=========== DANGER =========== */
  DANGER: string;
  DANGER_BG: string;
  DANGER_FG: string;
  DANGER_HOVER: string;
  /*   /**=========== DANGER =========== */

  /*   /**=========== WARNING =========== */
  WARNING: string;
  WARNING_BG: string;
  WARNING_FG: string;
  WARNING_HOVER: string;
  /*   /**=========== WARNING =========== */

  /*   /**=========== BORDER_RADIUS =========== */
  BORDER_RADIUS_DEFAULT: string;
  BORDER_RADIUS_4: string;
  BORDER_RADIUS_8: string;
  BORDER_RADIUS_16: string;
  /*   /**=========== BORDER_RADIUS =========== */

  /*   /**=========== BORDER =========== */
  BORDER_DEFAULT: string;
  BORDER_SECTION: string;
  BORDER_DEFAULT_FOCUS: string;
  BORDER_DEFAULT_TABLE_ERROR: string;
  BORDER_DEFAULT_ROW_ERROR: string;
  BORDER_DEFAULT_HOVER: string;

  /*   /**=========== BORDER =========== */

  /*   /**=========== BACKGROUND_COLOR =========== */
  BG_INPUT: string;
  BG_INPUT_DISABLED: string;
  BG_INPUT_HIGHLIGHT: string;
  BG_PAGE: string;
  BG_SIDEBAR: string;
  BG_SURFACE: string;
  BG_SURFACE_HIGHLIGHTED: string;
  BG_SURFACE_HOVER: string;
  BG_SURFACE_HOVER_EMPHASIZED: string;
  BG_SURFACE_HOVER_GRAY: string;
  BG_SURFACE_PRESS: string;
  BG_SWITCH_OFF: string;
  BG_SWITCH_OFF_HOVER: string;
  BG_SWITCH_ON: string;
  BG_SWITCH_ON_HOVER: string;
  BG_TOOLTIP: string;
  /*   /**=========== BACKGROUND_COLOR =========== */

  /*   /**=========== TEXT =========== */
  TEXT_BODY: string;
  TEXT_BODY_INVERT: string;
  TEXT_CONTROL: string;
  TEXT_DISABLED: string;
  TEXT_DISABLED_EMPHASIZED: string;
  TEXT_DISABLED_UNDEREMPHASIZED: string;
  TEXT_EMPHASIZED: string;
  TEXT_LABEL: string;
  TEXT_HEADER: string;
  /*   /**=========== TEXT =========== */

  /*   /**=========== BOX-SHADOW =========== */
  BOX_SHADOW_INPUT_FOCUS: string;
  /*   /**=========== BOX-SHADOW =========== */

  /*   /**=========== TABLE =========== */
  TABLE_HEADER_BG: string;
  TABLE_ROW_BG_HOVER: string;
  TABLE_HEADER_TEXT: string;
  /*   /**=========== TABLE =========== */

  [key: string]: string;
};
