import * as S from './RecentHotProject.style';
import { ContentCard } from '@/features';

const Projects = [
  {
    id: 1,
    title: '예시 타이틀',
    content:
      '프로젝트 소개글을 앞 약 40자 내외로 보여줍니다. 프로젝트 소개글을 앞 약 40자 내 50자 내외로 보여줍니다. 길어지면 이런...',
    viewCount: 100,
    bookmarkCount: 54,
    commentCount: 13,
  },
  {
    id: 2,
    title: '예시 타이틀',
    content:
      '프로젝트 소개글을 앞 약 40자 내외로 보여줍니다. 프로젝트 소개글을 앞 약 40자 내 50자 내외로 보여줍니다. 길어지면 이런...',
    viewCount: 100,
    bookmarkCount: 54,
    commentCount: 13,
  },
  {
    id: 3,
    title: '예시 타이틀',
    content:
      '프로젝트 소개글을 앞 약 40자 내외로 보여줍니다. 프로젝트 소개글을 앞 약 40자 내 50자 내외로 보여줍니다. 길어지면 이런...',
    viewCount: 100,
    bookmarkCount: 54,
    commentCount: 13,
  },
  {
    id: 4,
    title: '예시 타이틀',
    content:
      '프로젝트 소개글을 앞 약 40자 내외로 보여줍니다. 프로젝트 소개글을 앞 약 40자 내 50자 내외로 보여줍니다. 길어지면 이런...',
    viewCount: 100,
    bookmarkCount: 54,
    commentCount: 13,
  },
];

const RecentHotProject = () => {
  return (
    <S.RecentWrapper>
      <S.RecentContainer>
        <S.Title>최근 인기 프로젝트</S.Title>
        <S.CardContainer>
          {Projects.map(({ id, title, content, viewCount, bookmarkCount, commentCount }) => (
            <ContentCard
              key={id}
              title={title}
              content={content}
              viewCount={viewCount}
              bookmarkCount={bookmarkCount}
              commentCount={commentCount}
              type="RecruitCard"
            />
          ))}
        </S.CardContainer>
      </S.RecentContainer>
    </S.RecentWrapper>
  );
};

export default RecentHotProject;
