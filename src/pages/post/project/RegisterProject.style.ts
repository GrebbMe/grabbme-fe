import { styled } from 'styled-components';

export const Header = styled.header`
  grid-column: 1/ -1;
  margin: 6.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-height: 7.2rem;
  span.title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    ${({ theme }) => theme.typo.TITLE}
    color:${({ theme }) => theme.color.BLACK_100}
  }
  span {
    display: flex;2
    flex-direction: row;
    justify-content: center;
    ${({ theme }) => theme.typo.BODY_SEMIBOLD}
    color: ${({ theme }) => theme.color.GRAY_50};
  }

  ${({ theme }) => theme.device.MOBILE} {
    span {
      display: none;
    }
    color: ${({ theme }) => theme.color.BLACK_100};
    ${({ theme }) => theme.typo.BODY_SEMIBOLD};
    margin-top: 4rem;
    margin-bottom: 2.4rem;
  }
`;

export const TitleInput = styled.div`
  grid-row: 2;
  grid-column: 3;
  ${({ theme }) => theme.device.MOBILE} {
    grid-column: 1 / -1;
  }
`;

export const EditorContainer = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;

  ${({ theme }) => theme.device.MOBILE} {
    grid-column: 1 / -1;
    margin-top: 1.6rem;
  }
`;

export const CategorySelectContainer = styled.div`
  grid-column: 3 / 11;
  grid-row: 5;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;

  ${({ theme }) => theme.device.MOBILE} {
    grid-column: 1 / -1;
    margin-top: 1.6rem;
  }
`;

export const StackSelectContainer = styled.div`
  grid-column: 3 / 11;

  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;

  ${({ theme }) => theme.device.MOBILE} {
    grid-column: 1 / -1;
    margin-top: 1.6rem;
  }
`;
export const ProjectPeriodContainer = styled.div`
  grid-column: 3 /6;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  ${({ theme }) => theme.device.MOBILE} {
    grid-column: 1 / -1;
    margin-top: 1.6rem;
  }
`;

export const DeadlineCalendarContainer = styled.div`
  grid-column: 8 / 11;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;

  ${({ theme }) => theme.device.MOBILE} {
    grid-column: 1 / -1;
    margin-top: 1.6rem;
  }
`;

export const PositionContainer = styled.div`
  margin-top: 3.2rem;
  grid-column: 3 / 8;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.device.MOBILE} {
    grid-column: 1 / -1;
    margin-top: 1.6rem;
  }
`;
export const TotalContainer = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  grid-column: 8 / 9;
  grid-row: 7;

  ${({ theme }) => theme.device.MOBILE} {
    display: none;
  }
`;
export const TotalBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.8rem;

  span {
    ${({ theme }) => theme.typo.BODY_SEMIBOLD}
    color: ${({ theme }) => theme.color.GRAY_50};
  }
`;
export const TotalNumber = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.SUBTITLE_20};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
`;
export const ButtonContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 8rem;
  margin-bottom: 24rem;

  ${({ theme }) => theme.device.MOBILE} {
    margin-top: 2.4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`;
