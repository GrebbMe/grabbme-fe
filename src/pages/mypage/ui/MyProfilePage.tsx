import * as S from './MyProfilePage.style.ts';
import { Sidebar } from '@/features/myPage';
import { Button } from '@/shared/ui';
import { ProfileDetail, UserProfile } from '@/widgets/user';

const MyProfilePage = () => {
  const email = 'github@github.com';
  const nickname = '양유나';

  const job = 'UX/UI 디자이너';
  const techStacks = [
    { id: '1', label: 'Figma' },
    { id: '2', label: 'Adobe XD' },
    { id: '3', label: 'Sketch' },
  ];
  const categories = [
    { id: '1', label: '디자인' },
    { id: '2', label: '프론트엔드' },
  ];
  const experience = '5년';

  const handleLogout = () => {
    alert('회원 탈퇴가 완료되었습니다.');
  };

  return (
    <>
      <S.SidebarContainer>
        <Sidebar />
      </S.SidebarContainer>
      <S.MyPageContainer>
        <UserProfile email={email} nickname={nickname} onLogout={handleLogout} />
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
