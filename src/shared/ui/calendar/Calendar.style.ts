import DatePicker from 'react-datepicker';
import { css, styled } from 'styled-components';

// 스타일드 컴포넌트 정의
const DatePickerContainer = styled.div`
  margin-top: 10px; //! 임시
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  padding: 12px 16px;
  border-radius: 8px;
  width: 288px;
  height: 48px;

  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .date-input {
    width: 100%;
    .react-datepicker-wrapper {
      width: 100%;
    }

    // 달력 팝업 컴포넌트
    .react-datepicker-popper {
      position: absolute;
      left: 12px !important;
      top: 10px !important;

      .react-datepicker__triangle {
        display: none;
      }

      // 팝업 컴포넌트 본체
      .react-datepicker {
        width: 288px;
        border-radius: 8px;
        border: 1px solid #d9d9d9;
        box-shadow:
          rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
          rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      }

      .react-datepicker__month-container {
        width: 100%;
        .react-datepicker__header {
          background-color: transparent !important;
          border-bottom: none !important;
          padding: 0px !important;
          margin: 0px !important;
          .react-datepicker__current-month {
            ${({ theme }) => css`
              ${theme.typo.SUBTITE_20}
            `};
            color: ${({ theme }) => theme.color.BLACK_80};
            padding-top: 24px;
            padding-bottom: 16px;
          }
        }
        .react-datepicker__day-names {
          display: flex;
          justify-content: center;
          align-content: center;
          gap: 21px;
          margin-bottom: 6px;
          .react-datepicker__day-name {
            width: 13px;
            height: 20px;
            margin: 0px !important;
            ${({ theme }) => css`
              ${theme.typo.SUBTITLE_14}
            `};
            color: ${({ theme }) => theme.color.GRAY_50};
          }
        }
        .react-datepicker__month {
          margin: 0px;
          width: 100%;
          .react-datepicker__week {
            display: flex;
            justify-content: center;
            align-content: center;
            gap: 2px;
            .react-datepicker__day {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0px;
              width: 32px;
              height: 32px;
              ${({ theme }) => css`
                ${theme.typo.CAPTION_14}
              `};
              color: ${({ theme }) => theme.color.BLACK_100};

              &:hover {
                color: ${({ theme }) => theme.color.BLACK_100};
                background-color: ${({ theme }) => theme.color.BLUE_30};
                border: 1px solid ${({ theme }) => theme.color.BLUE_50};
                border-radius: 50% !important;
              }
            }
            .react-datepicker__day--disabled {
              color: ${({ theme }) => theme.color.GRAY_30};
              &:hover {
                background-color: transparent;
                border: none;
              }
              pointer-events: none;
            }
            // input에 일자만 반영되어 선택되는 css
            .react-datepicker__day--keyboard-selected {
              background-color: transparent;
            }
            // 선택한 날짜
            .react-datepicker__day--selected {
              background-color: ${({ theme }) => theme.color.PRIMARY_BLUE} !important;
              width: 32px;
              border-radius: 50%;
              color: ${({ theme }) => theme.color.WHITE};
              pointer-events: none;
            }
            .react-datepicker__day--today {
              background-color: ${({ theme }) => theme.color.BLUE_30};
              width: 32px;
              border-radius: 50%;
            }
            // 해당 윌 외의 일자 스타일
            .react-datepicker__day--outside-month {
              visibility: hidden;
            }
          }
        }
      }
    }
  }

  .date-icon {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;

    img {
      width: 24px;
      height: 24px;
      color: ${({ theme }) => theme.color.BLUE_50};
    }

    cursor: pointer;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  ${({ theme }) => css`
    ${theme.typo.CAPTION_14}
  `}
  color: ${({ theme }) => theme.color.BLACK_80};
  border: none;

  &:focus {
    outline: none;
  }
  width: 100%;
`;

export { DatePickerContainer, StyledDatePicker };
