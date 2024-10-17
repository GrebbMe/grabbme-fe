import { css, styled } from 'styled-components';

export const PBCount = styled.div`
  ${({ theme }) => css`
    ${theme.typo.CAPTION_12};
    color: ${theme.color.GRAY_50};
  `};
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.2rem;
  width: 26.6rem;
  position: relative;
`;

export const ProgressBarWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const ProgressBarStyle = styled.progress`
  appearance: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  &&::-webkit-progress-bar {
    width: 23.2rem;
    height: 2.2rem;
    background: #edf0f5;
    border-radius: 0.8rem;
    box-shadow: inset 0.3rem 0.3rem 1rem #ccc;
    padding: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  }
  &&::-webkit-progress-value {
    border-radius: 0.4rem;
    background: #8e98a9;
  }
`;
