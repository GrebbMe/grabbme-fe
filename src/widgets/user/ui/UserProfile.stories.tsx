import UserProfile from './UserProfile';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

export default {
  title: 'components/widgets/UserProfile',
  component: UserProfile,
};

const Template = (args) => (
  <StoryContainer>
    <SectionContainer>
      <RowContainer>
        <UserProfile {...args} />
      </RowContainer>
    </SectionContainer>
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  profileImgUrl: '/default-image.png',
  nickname: '깃허브에서 불러온 닉네임',
  email: 'github@github.com',
  onLogout: () => alert('회원 탈퇴 클릭됨'),
};

export const All = () => (
  <StoryContainer>
    <SectionContainer>
      <RowContainer>
        <UserProfile
          profileImgUrl="https://example.com/profile.jpg"
          nickname="사용자 닉네임"
          email="user@example.com"
          onLogout={() => alert('회원 탈퇴 클릭됨')}
        />
      </RowContainer>
      <RowContainer>
        <UserProfile
          nickname="프로필 이미지 없음"
          email="noimage@example.com"
          onLogout={() => alert('회원 탈퇴 클릭됨')}
        />
      </RowContainer>
    </SectionContainer>
  </StoryContainer>
);
