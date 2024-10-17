import * as S from './MyProfilePage.style.ts';
import { Sidebar } from '@/features/myPage';
import { Button } from '@/shared/ui';
import { ProfileDetail, UserProfile } from '@/widgets/user';

const MyProfilePage = () => {
  const userProfile = {
    data: {
      email: 'una33235@github.com',
      nickname: 'yuna',
      stack_category_id: ['1', '2', '3', '4', '5'],
      project_category_id: [],
      position_category_id: {
        position_category_id: 1,
        name: 'Frontend Developer',
        kor_name: '프론트엔드 개발자',
        abbreviation: 'FE',
      },
      career_category_id: {
        career_category_id: 1,
        content: '0년차',
      },
    },
  };

  const stackNames = [
    { id: '1', label: 'React' },
    { id: '2', label: 'TypeScript' },
    { id: '3', label: 'JavaScript' },
    { id: '4', label: 'CSS' },
    { id: '5', label: 'HTML' },
  ];

  const projectNames = [
    { id: '1', label: '기타' },
    { id: '2', label: '이커머스' },
    { id: '3', label: 'B2B' },
  ];

  const handleLogout = () => {
    alert('회원 탈퇴가 완료되었습니다.');
  };

  const job = userProfile.data.position_category_id.kor_name;

  const techStacks = stackNames.length ? stackNames : [{ id: '0', label: '기술 스택 정보 없음' }];
  const categories = projectNames.length
    ? projectNames
    : [{ id: '0', label: '카테고리 정보 없음' }];

  const experience = userProfile.data.career_category_id.content;

  return (
    <>
      <S.SidebarContainer>
        <Sidebar />
      </S.SidebarContainer>
      <S.MyPageContainer>
        <UserProfile
          email={userProfile.data.email}
          nickname={userProfile.data.nickname}
          onLogout={handleLogout}
        />
        <S.DivideLine />
        <S.TitleWrapper>
          <S.TitleLabel>내 정보</S.TitleLabel>
          <Button variant={'primary'} size={'sm'}>
            수정
          </Button>
        </S.TitleWrapper>
        <ProfileDetail
          job={job}
          techStacks={techStacks}
          categories={categories}
          experience={experience}
        />
      </S.MyPageContainer>
    </>
  );
};

export default MyProfilePage;
