import { css, styled } from 'styled-components';

// 스타일 정의
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.4rem;
  padding-bottom: 1.6rem;

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
      width: 2.4rem;
      height: 2.4rem;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  .year-month {
    width: 13rem;
    ${({ theme }) => css`
      ${theme.typo.SUBTITLE_20}
    `};
  }
`;

export { HeaderContainer };
