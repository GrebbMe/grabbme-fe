import { css, styled } from 'styled-components';

// 스타일 정의
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 16px;

  .prev-button,
  .next-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.color.BLUE_50};
    svg {
      width: 24px;
      height: 24px;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  .year-month {
    width: 130px;
    ${({ theme }) => css`
      ${theme.typo.SUBTITLE_20}
    `};
  }
`;

export { HeaderContainer };
