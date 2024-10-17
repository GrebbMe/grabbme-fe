import * as S from './ProfileDetail.style';
import { ContentTag } from '@/entities/myPage';

interface ProfileDetailProps {
  job: string;
  techStacks: { id: string; label: string }[];
  categories: { id: string; label: string }[];
  experience: string;
}

const ProfileDetail = ({ job, techStacks, categories, experience }: ProfileDetailProps) => {
  return (
    <S.ProfileDetailContainer>
      <S.ProfileDetailWrapper>
        <S.SectionTitle>희망 직군</S.SectionTitle>
        <S.SectionContent>{job}</S.SectionContent>
      </S.ProfileDetailWrapper>

      <S.ProfileDetailWrapper>
        <S.SectionTitle>기술 스택</S.SectionTitle>
        <S.TagContent>
          {techStacks && techStacks.length > 0 ? (
            techStacks.map((stack) => <ContentTag key={stack.id} label={stack.label} />)
          ) : (
            <S.SectionContent>기술 스택 정보 없음</S.SectionContent>
          )}
        </S.TagContent>
      </S.ProfileDetailWrapper>

      <S.ProfileDetailWrapper>
        <S.SectionTitle>선호 카테고리</S.SectionTitle>
        <S.TagContent>
          {categories && categories.length > 0 ? (
            categories.map((category) => <ContentTag key={category.id} label={category.label} />)
          ) : (
            <S.SectionContent>선호 카테고리 정보 없음</S.SectionContent>
          )}
        </S.TagContent>
      </S.ProfileDetailWrapper>

      <S.ProfileDetailWrapper>
        <S.SectionTitle>개발 경력</S.SectionTitle>
        <S.SectionContent>{experience}</S.SectionContent>
      </S.ProfileDetailWrapper>
    </S.ProfileDetailContainer>
  );
};

export default ProfileDetail;
