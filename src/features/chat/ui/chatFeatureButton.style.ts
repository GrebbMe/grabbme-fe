import { styled } from 'styled-components';

const StyledChatButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border: transparent;
  background: ${({ theme }) => theme.color.BLUE_10};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.color.BLUE_50};
  }

  &:hover {
    background: ${({ theme }) => theme.color.BLUE_30};
  }

  &:active {
    background: ${({ theme }) => theme.color.PRIMARY_BLUE};
    outline: none;

    svg {
      color: ${({ theme }) => theme.color.WHITE};
    }
  }
`;

export { StyledChatButton };
