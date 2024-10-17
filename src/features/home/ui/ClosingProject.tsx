import * as S from './ClosingProject.style';

interface Props {
  title: string;
  positions: string[];
  dueDay: string;
}

const ClosingProject = ({ title, positions, dueDay }: Props) => {
  return (
    <S.ProjectContainer>
      <S.Title>{title}</S.Title>
      <ul>
        {positions.map((item) => (
          <S.Position>{item}</S.Position>
        ))}
      </ul>
      <S.ButtonContainer>
        <S.dueBox>{`마감 ${dueDay}일 전`}</S.dueBox>
        <S.Button>지원하기</S.Button>
      </S.ButtonContainer>
    </S.ProjectContainer>
  );
};

export default ClosingProject;
