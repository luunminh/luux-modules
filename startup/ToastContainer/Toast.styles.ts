import { ColorCode } from '@core/common/config';
import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithChildren } from 'react';

type StyledToastProps = PropsWithChildren & {
  colorCode: Partial<ColorCode>;
  hideProgressBar: boolean;
};

export const StyledToast: StyledComponent<StyledToastProps> = styled.div<StyledToastProps>`
  /* Base styles for all toasts */
  position: relative;
  z-index: 9999999999999999;
  .Toastify__toast {
    box-shadow: 0px 5px 24px 0px rgba(52, 52, 52, 0.15);
    border-radius: 4px;
    font-weight: normal;
    padding: 8px 12px 12px 16px;
    font-size: 14px;
    min-height: 44px;
    z-index: 9999;

    &-body {
      padding: 0;
      display: flex;
      z-index: 9999;
      align-items: flex-start;
    }

    &-icon {
      margin: 0;
      padding: 4px 0;
    }

    &::before {
      z-index: 0;
      content: '';
      position: absolute;
      bottom: 0;
      width: 120%;
      left: -16px;
      height: ${({ hideProgressBar }) => (hideProgressBar ? '0px' : '4px')};
      background-color: ${({ colorCode }) => colorCode.BG_SURFACE};
    }

    & div[role='progressbar'] {
      height: ${({ hideProgressBar }) => (hideProgressBar ? '0px' : '4px')};
    }

    /*
     * Styles for SUCCESS toasts
     */
    &--success {
      background-color: ${({ colorCode }) => colorCode.SUCCESS_BG};
      color: ${({ colorCode }) => colorCode.TEXT_BODY};

      & div[role='progressbar'] {
        background-color: ${({ colorCode }) => colorCode.SUCCESS};
      }

      & .Toastify__toast-icon {
        color: ${({ colorCode }) => colorCode.SUCCESS};
      }

      /*   /**=========== filled =========== */
      &--filled {
        background-color: ${({ colorCode }) => colorCode.SUCCESS};
        color: ${({ colorCode }) => colorCode.GRAY_00};

        & .Toastify__toast-icon {
          color: ${({ colorCode }) => colorCode.GRAY_00};
        }

        & div[role='progressbar'] {
          background-color: ${({ colorCode }) => colorCode.GRAY_00};
        }

        &::before {
          background-color: ${({ colorCode }) => colorCode.SUCCESS_FG};
        }

        & .Toastify__close-button--light {
          color: ${({ colorCode }) => colorCode.GRAY_00};
        }
      }

      /*   /**=========== outlined =========== */
      &--outlined {
        border: 1px solid ${({ colorCode }) => colorCode.SUCCESS};
        background-color: ${({ colorCode }) => colorCode.WHITE};

        &::before {
          background-color: ${({ colorCode }) => colorCode.SUCCESS_BG};
        }
      }
    }

    /*
   * Styles for INFO toasts
   */
    &--info {
      background-color: ${({ colorCode }) => colorCode.INFO_BG};
      color: ${({ colorCode }) => colorCode.TEXT_BODY};

      & div[role='progressbar'] {
        background-color: ${({ colorCode }) => colorCode.INFO};
      }

      & .Toastify__toast-icon {
        color: ${({ colorCode }) => colorCode.INFO};
      }

      /*   /**=========== filled =========== */
      &--filled {
        background-color: ${({ colorCode }) => colorCode.INFO};
        color: ${({ colorCode }) => colorCode.GRAY_00};

        & .Toastify__toast-icon {
          color: ${({ colorCode }) => colorCode.GRAY_00};
        }

        & div[role='progressbar'] {
          background-color: ${({ colorCode }) => colorCode.GRAY_00};
        }

        &::before {
          background-color: ${({ colorCode }) => colorCode.INFO_FG};
        }

        & .Toastify__close-button--light {
          color: ${({ colorCode }) => colorCode.GRAY_00};
        }
      }

      /*   /**=========== outlined =========== */
      &--outlined {
        border: 1px solid ${({ colorCode }) => colorCode.INFO};
        background-color: ${({ colorCode }) => colorCode.WHITE};

        &::before {
          background-color: ${({ colorCode }) => colorCode.INFO_BG};
        }
      }
    }

    /*
   * Styles for WARNING toasts
   */
    &--warning {
      background-color: ${({ colorCode }) => colorCode.WARNING_BG};
      color: ${({ colorCode }) => colorCode.TEXT_BODY};

      & div[role='progressbar'] {
        background-color: ${({ colorCode }) => colorCode.WARNING};
      }

      & .Toastify__toast-icon {
        color: ${({ colorCode }) => colorCode.WARNING};
      }

      /*   /**=========== filled =========== */
      &--filled {
        background-color: ${({ colorCode }) => colorCode.WARNING};
        color: ${({ colorCode }) => colorCode.GRAY_00};

        & .Toastify__toast-icon {
          color: ${({ colorCode }) => colorCode.GRAY_00};
        }

        & div[role='progressbar'] {
          background-color: ${({ colorCode }) => colorCode.GRAY_00};
        }

        &::before {
          background-color: ${({ colorCode }) => colorCode.WARNING_FG};
        }

        & .Toastify__close-button--light {
          color: ${({ colorCode }) => colorCode.GRAY_00};
        }
      }

      /*   /**=========== outlined =========== */
      &--outlined {
        border: 1px solid ${({ colorCode }) => colorCode.WARNING};
        background-color: ${({ colorCode }) => colorCode.WHITE};

        &::before {
          background-color: ${({ colorCode }) => colorCode.WARNING_BG};
        }
      }
    }

    /*
   * Styles for ERROR toasts
   */
    &--error {
      background-color: ${({ colorCode }) => colorCode.DANGER_BG};
      color: ${({ colorCode }) => colorCode.TEXT_BODY};

      & div[role='progressbar'] {
        background-color: ${({ colorCode }) => colorCode.DANGER};
      }

      & .Toastify__toast-icon {
        color: ${({ colorCode }) => colorCode.DANGER};
      }

      /*   /**=========== filled =========== */
      &--filled {
        background-color: ${({ colorCode }) => colorCode.DANGER};
        color: ${({ colorCode }) => colorCode.GRAY_00};

        & .Toastify__toast-icon {
          color: ${({ colorCode }) => colorCode.GRAY_00};
        }

        & div[role='progressbar'] {
          background-color: ${({ colorCode }) => colorCode.GRAY_00};
        }

        &::before {
          background-color: ${({ colorCode }) => colorCode.DANGER_FG};
        }

        & .Toastify__close-button--light {
          color: ${({ colorCode }) => colorCode.GRAY_00};
        }
      }

      /*   /**=========== outlined =========== */
      &--outlined {
        border: 1px solid ${({ colorCode }) => colorCode.DANGER};
        background-color: ${({ colorCode }) => colorCode.WHITE};

        &::before {
          background-color: ${({ colorCode }) => colorCode.DANGER_BG};
        }
      }
    }
  }

  .Toastify__close-button {
    &--light {
      opacity: 1;
      color: ${({ colorCode }) => colorCode.TEXT_CONTROL};
    }
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
