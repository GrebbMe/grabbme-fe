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
`;
export const ButtonWrapper = styled.div<{ type: 'confirm' | 'alert' | '' }>`
  display: flex;
  flex-direction: row;
  margin-top: 1.4rem;

  justify-content: ${({ type }) => (type === 'confirm' ? 'space-between' : 'center')};
`;
