import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BasicInfoContainer,
  ContainerTitle,
  CreatedAt,
  DetailInfoContainer,
  DetailInfoWrapper,
  FooterContainer,
  HeaderContainer,
  HeaderWrapper,
  InfoItem,
  ItemContent,
  ItemTitle,
  Nickname,
  Title,
  TitleInfo,
  TitleWrapper,
} from '@/pages/auth/ui/GrabbzoneDetail.style';
import { IcBookmark, ProfileIcon } from '@/shared/assets';
import IcChatFill from '@/shared/assets/chat-fill.svg?react';
import IcListColor from '@/shared/assets/list-color.svg?react';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui';

interface GrabbzoneDetailResponse {
  post_id: number;
  title: string;
  content: string;
  // start_month: string;
  // end_month: string;
  create_at: string;
  // expired_at: string;
  view_cnt: number;
  bookmarked_cnt: number;
  //! position 없음
  position_category_id: number;
  career_category_id: number;
  project_category_id: number[];
  stack_category_id: number[];
}

export const GrabbzoneDetail = () => {
  const [profileImage, setProfileImage] = useState('');
  const [isAuthor, setIsAuthor] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>('user nickname');

  // useFetchCategories

  // const formatDate = (date: string ) => {
  //   const newDate =
  // }

  const [detail, setDetail] = useState<GrabbzoneDetailResponse>({
    post_id: 0,
    title: '',
    content: '',
    create_at: '',
    view_cnt: 0,
    bookmarked_cnt: 0,
    career_category_id: 0,
    position_category_id: 0,
    project_category_id: [],
    stack_category_id: [],
  });

  const { showModal } = useModal();
  const { id } = useParams();

  useEffect(() => {
    const loadBoardData = async () => {
      try {
        const res = await axios.get(`https://grabbme.store/api/board/${id}`);
        setDetail({ ...res.data.data });
      } catch (error) {
        showModal({
          content: '서버에서 게시글 정보를 불러오지 못했습니다.',
          type: 'alert',
        });
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadBoardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderContainer>
        <TitleWrapper>
          <Title>{detail.title}</Title>
          {isAuthor && (
            <Button variant={'primary'} size={'sm'}>
              수정
            </Button>
          )}
        </TitleWrapper>
        <TitleInfo>
          <HeaderWrapper>
            <Nickname>
              {profileImage ? <img src={profileImage} /> : <ProfileIcon />}
              {nickname}
            </Nickname>
            <CreatedAt>{detail.create_at}</CreatedAt>
          </HeaderWrapper>
          <>CountBox</>
        </TitleInfo>
      </HeaderContainer>
      <BasicInfoContainer>
        <InfoItem>
          <ItemTitle>희망 직군</ItemTitle>
          <ItemContent>{detail.position_category_id} 까지</ItemContent>
        </InfoItem>
        <InfoItem>
          <ItemTitle>개발경력</ItemTitle>
          <ItemContent>{detail.career_category_id}</ItemContent>
        </InfoItem>
        <InfoItem>
          <ItemTitle>카테고리</ItemTitle>
          <ItemContent>
            {detail.project_category_id.map((id) => (
              <>{id},</>
            ))}
          </ItemContent>
        </InfoItem>
        <InfoItem>
          <ItemTitle>기술 스택</ItemTitle>
          <ItemContent>
            {detail.stack_category_id.map((id) => (
              <>{id},</>
            ))}
          </ItemContent>
        </InfoItem>
      </BasicInfoContainer>
      <DetailInfoContainer>
        <ContainerTitle>프로젝트 소개</ContainerTitle>
        <DetailInfoWrapper>{detail.content}</DetailInfoWrapper>
      </DetailInfoContainer>
      <FooterContainer>
        <Button variant="primary" size="sm" icon={<IcBookmark />}>
          북마크
        </Button>
        <Button variant="primary" size="sm" icon={<IcChatFill />}>
          채팅하기
        </Button>
        <Button variant="primary" size="sm" icon={<IcListColor />}>
          목록으로
        </Button>
      </FooterContainer>
    </>
  );
};
