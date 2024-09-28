import { Icon } from '@iconify/react/dist/iconify.js';
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
  &:hover {
    background: ${({ theme }) => theme.color.BLUE_30};
    outline: 0.15rem solid ${({ theme }) => theme.color.BLUE_50};
  }
  &:active {
    background: ${({ theme }) => theme.color.PRIMARY_BLUE};
    outline: none;
  }
`;

const StyledIcon = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.color.BLUE_50};
  &:active {
    color: ${({ theme }) => theme.color.WHITE};
  }
`;
export { StyledChatButton, StyledIcon };
