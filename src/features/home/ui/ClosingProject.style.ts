import styled from 'styled-components';

export const ProjectContainer = styled.div`
  width: 26.4rem;
  height: 19.2rem;
  padding: 3.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  border:
    0.1rem,
    solid ${({ theme }) => theme.color.GRAY_30};
  border-radius: 0.8rem;
  cursor: pointer;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.SUBTITLE_14};
  color: ${({ theme }) => theme.color.BLACK_100};
  margin-bottom: 1.2rem;
`;

export const Position = styled.li`
  ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.BLACK_80};
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const dueBox = styled.div`
  background-color: ${({ theme }) => theme.color.BLUE_30};
  ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  padding: 0.35rem 0.8rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
`;

export const Button = styled.button`
  width: 10.8rem;
  height: 3.8rem;
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  ${({ theme }) => theme.typo.BODY_SEMIBOLD}
  border-radius: 0.8rem;
  cursor: pointer;
`;
