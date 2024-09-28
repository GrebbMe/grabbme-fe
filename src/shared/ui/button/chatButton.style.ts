import { styled } from 'styled-components';

const StyledFloatingChat = styled.button`
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.WHITE};
  border: 0.08rem solid #d9d9d9;
  box-shadow: 0.08rem 0.08rem 0.64rem 0.16rem rgba(142, 152, 169, 0.25);
  filter: drop-shadow(0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
  width: 6.4rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: invert(16%) sepia(20%) saturate(1785%) hue-rotate(179deg) brightness(95%) contrast(92%);
  }

  &:hover {
    background: ${({ theme }) => theme.color.BLUE_30};
    border: 0.08rem solid ${({ theme }) => theme.color.GRAY_30};
    filter: drop-shadow(0rem 0rem 0rem rgba(0, 0, 0, 0));
  }
`;

const StyledFloatingClose = styled.button`
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.WHITE};
  border: 0.08rem solid ${({ theme }) => theme.color.GRAY_30};
  box-shadow: 0.08rem 0.08rem 0.64rem 0.16rem rgba(142, 152, 169, 0.25);
  width: 6.4rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: invert(54%) sepia(6%) saturate(70%) hue-rotate(314deg) brightness(98%) contrast(86%);
  }

  &:hover {
    background: ${({ theme }) => theme.color.BLUE_30};
    border: 0.08rem solid ${({ theme }) => theme.color.GRAY_30};
  }
`;

export { StyledFloatingChat, StyledFloatingClose };
