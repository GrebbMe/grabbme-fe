import styled from 'styled-components';
export const ChatContainer = styled.div`
  display: flex;
  width: 34.4rem;
  padding: 0.8rem 1.6rem;
  align-items: center;
  background-color: ${({ theme }) => theme.color.BLUE_10};
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_30};
  border-radius: 3rem;
`;

export const ChatWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled.input`
  ${({ theme }) => theme.typo.CAPTION_12};
  //flex-grow: 1;
  padding: 0.16rem 0;
  border: none;
  outline: none;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.color.BLUE_10};
  color: ${({ theme }) => theme.color.BLACK_80};
`;
