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
  img {
    filter: invert(71%) sepia(6%) saturate(753%) hue-rotate(179deg) brightness(84%) contrast(87%);
  }

  &:hover {
    background: ${({ theme }) => theme.color.BLUE_30};
  }

  &:active {
    background: ${({ theme }) => theme.color.PRIMARY_BLUE};
    outline: none;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(134deg) brightness(102%) contrast(101%);
    }
  }
`;

export { StyledChatButton };
