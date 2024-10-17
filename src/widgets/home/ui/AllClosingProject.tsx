import * as S from './AllClosingProject.style';
import ClosingProject from '@/features/home/ui/ClosingProject';

const Projects = [
  {
    id: 1,
    title: '프로젝트 제목을 15자 이내 작성',
    positions: ['프론트엔드 개발자', '백엔드 개발자'],
    dueDay: '1',
  },
  {
    id: 2,
    title: '프로젝트 제목을 15자 이내 작성',
    positions: ['프론트엔드 개발자', '백엔드 개발자'],
    dueDay: '2',
  },
  {
    id: 3,
    title: '프로젝트 제목을 15자 이내 작성',
    positions: ['프론트엔드 개발자', '백엔드 개발자'],
    dueDay: '10',
  },
  {
    id: 3,
    title: '프로젝트 제목을 15자 이내 작성',
    positions: ['프론트엔드 개발자', '백엔드 개발자'],
    dueDay: '99',
  },
];

const AllClosingProject = () => {
  return (
    <S.ClosingWrapper>
      <S.ClosingContainer>
        <S.Title>곧 마감되는 프로젝트</S.Title>
        <S.CardContainer>
          {Projects.map(({ title, positions, dueDay }) => (
            <ClosingProject title={title} positions={positions} dueDay={dueDay} />
          ))}
        </S.CardContainer>
      </S.ClosingContainer>
    </S.ClosingWrapper>
  );
};

export default AllClosingProject;
