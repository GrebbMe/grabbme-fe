import DatePicker from 'react-datepicker';
import { css, styled } from 'styled-components';

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  width: 28.8rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ theme }) => theme.device.MOBILE} {
    width: 100%;
    height: 4.2rem;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  ${({ theme }) => css`
    ${theme.typo.CAPTION_14};
    color: ${theme.color.BLACK_80};
  `}
  border: none;

  &:focus {
    outline: none;
  }
  width: 100%;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DatePickerLayout = styled.div`
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker-popper {
    position: absolute;
    left: -1.6rem !important;
    top: 1.6rem !important;

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker {
      width: 28.8rem;
      border-radius: 0.8rem;
      border: 1px solid ${({ theme }) => theme.color.GRAY_30};
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }

    .react-datepicker__month-container {
      width: 100%;

      .react-datepicker__header {
        background-color: transparent !important;
        border-bottom: none !important;
        padding: 0 !important;
        margin: 0 !important;

        .react-datepicker__current-month {
          ${({ theme }) => css`
            ${theme.typo.SUBTITLE_20};
            color: ${theme.color.BLACK_80};
          `};
          padding-top: 2.4rem;
          padding-bottom: 1.6rem;
        }
      }

      .react-datepicker__day-names {
        display: flex;
        justify-content: center;
        align-content: center;
        gap: 2.1rem;
        margin-bottom: 0.6rem;

        .react-datepicker__day-name {
          width: 1.3rem;
          height: 2rem;
          margin: 0 !important;

          ${({ theme }) => css`
            ${theme.typo.SUBTITLE_14};
            color: ${theme.color.GRAY_50};
          `};
        }
      }

      .react-datepicker__month {
        margin: 0;
        width: 100%;

        .react-datepicker__week {
          display: flex;
          justify-content: center;
          align-content: center;
          gap: 0.2rem;

          .react-datepicker__day {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0rem;
            width: 3.2rem;
            height: 3.2rem;

            ${({ theme }) => css`
              ${theme.typo.CAPTION_14};
              color: ${theme.color.BLACK_100};
            `};

            &:hover {
              color: ${({ theme }) => theme.color.BLACK_100};
              background-color: ${({ theme }) => theme.color.BLUE_30};
              border: 1px solid ${({ theme }) => theme.color.BLUE_50};
              border-radius: 50% !important;
            }

            &.react-datepicker__day--disabled {
              color: ${({ theme }) => theme.color.GRAY_30};
              pointer-events: none;

              &:hover {
                background-color: transparent;
                border: none;
              }
            }

            &.react-datepicker__day--keyboard-selected {
              background-color: transparent;
            }

            &.react-datepicker__day--selected {
              background-color: ${({ theme }) => theme.color.PRIMARY_BLUE} !important;
              width: 3.2rem;

              border-radius: 50%;
              color: ${({ theme }) => theme.color.WHITE};
              pointer-events: none;
            }

            &.react-datepicker__day--today {
              background-color: ${({ theme }) => theme.color.BLUE_30};
              width: 3.2rem;
              border-radius: 50%;
            }

            &.react-datepicker__day--outside-month {
              visibility: hidden;
            }
          }
        }
      }
    }
  }
`;

const DatePickerIconStyle = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.color.BLUE_50};
  }

  cursor: pointer;
`;

export {
  DatePickerContainer,
  DatePickerIconStyle,
  DatePickerLayout,
  DatePickerWrapper,
  StyledDatePicker,
};
