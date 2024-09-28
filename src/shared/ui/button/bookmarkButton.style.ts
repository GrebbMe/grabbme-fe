import { styled } from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: white;
  border: 0.15rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: 11.2rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  white-space: nowrap;
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};

  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(134deg) brightness(102%) contrast(101%);
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_30};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.15rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
    img {
      filter: invert(15%) sepia(8%) saturate(5748%) hue-rotate(183deg) brightness(94%) contrast(90%);
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color.WHITE};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.15rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
    img {
      filter: invert(15%) sepia(8%) saturate(5748%) hue-rotate(183deg) brightness(94%) contrast(90%);
    }
  }
`;

const ClickedStyledButton = styled.button`
  border: 0.15rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: 11.2rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  white-space: nowrap;
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  border: 0.15rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};

  img {
    filter: invert(15%) sepia(8%) saturate(5748%) hue-rotate(183deg) brightness(94%) contrast(90%);
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_30};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.15rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
    img {
      filter: invert(15%) sepia(8%) saturate(5748%) hue-rotate(183deg) brightness(94%) contrast(90%);
    }
  }
`;
export { StyledButton, ClickedStyledButton };
