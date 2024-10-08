import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2.4rem 6.4rem;
  width: 29.6rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.GRAY_30};
  box-shadow: 0px 2px 16px 2px rgba(142, 152, 169, 0.25);
  display: flex;
  flex-direction: column;
`;
export const Content = styled.p`
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.SUBTITLE_14};
  text-align: center;
  min-height: 4rem;
`;
export const ButtonWrapper = styled.div<{ type: 'confirm' | 'alert' | '' }>`
  display: flex;
  flex-direction: row;
  margin-top: 1.4rem;

  justify-content: ${({ type }) => (type === 'confirm' ? 'space-between' : 'center')};
`;

export const AlertButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  border: 0.1rem solid transparent;
  border-radius: 0.8rem;
  cursor: pointer;
  box-sizing: border-box;
  flex-shrink: 0;
  ${({ theme }) => theme.typo.BODY_SEMIBOLD}
  width: 100%;
  padding: 0.8rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_30};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.WHITE};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
  }
`;
