import axios from 'axios';
import { format } from 'date-fns';
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
  RecruitStatusContainer,
  RecruitStatusItem,
  RecruitStatusWrapper,
  RSButton,
  RSItemTitle,
  RSProgressBar,
  TagList,
  Title,
  TitleInfo,
  TitleWrapper,
} from '@/pages/post/project/ProjectDetail.style';
import { IcBookmark, ProfileIcon, IcChatStart, IcList } from '@/shared/assets';
import { useFetchCategories } from '@/shared/hooks/useFetchCategories';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui';
import CountBox from '@/shared/ui/countBox/CountBox';
import { ProgressBar } from '@/shared/ui/progressBar/ProgressBar';
import { RowContainer, StoryContainer } from '@/shared/ui/storybook/story.style';
import Tag from '@/shared/ui/tag/Tag';

//! 임시값들
const rsItems = [
  { name: '프론트엔드 개발자', totalCnt: 3, acceptedCnt: 1, bottonStatus: 1 },
  { name: '임베디드 시스템 개발자', totalCnt: 5, acceptedCnt: 3, bottonStatus: 1 },
  { name: 'UX/UI 디자이너', totalCnt: 6, acceptedCnt: 6, bottonStatus: 1 },
];

interface ProjectRecruitmentResponse {
  post_id: number;
  title: string;
  content: string;
  start_month: string;
  end_month: string;
  create_at: string;
  expired_at: string;
  view_cnt: number;
  chat_cnt: number;
  bookmarked_cnt: number;
  project_category_id: number[];
  stack_category_id: number[];
}

export const ProjectDetail = () => {
  const [profileImage, setProfileImage] = useState('');
  const [isAuthor, setIsAuthor] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>('user nickname');

  const { jobPosition, careerYear, techStackList, categoryList } = useFetchCategories();

  const formatCreatedDate = (date: string): string => {
    return format(new Date(date), 'yyyy.MM.dd');
  };

  const formatExpiredDate = (date: string): string => {
    return format(new Date(date), 'yyyy. MM. dd');
  };

  const formatPeriodDate = (date: string): string => {
    return format(new Date(date), 'yyyy년 MM월');
  };

  const [detail, setDetail] = useState<ProjectRecruitmentResponse>({
    post_id: 0,
    title: '',
    content: '',
    start_month: '',
    end_month: '',
    create_at: '',
    expired_at: '',
    view_cnt: 0,
    bookmarked_cnt: 0,
    chat_cnt: 0,
    project_category_id: [],
    stack_category_id: [],
  });

  const { showModal } = useModal();
  const { id } = useParams();

  useEffect(() => {
    const loadBoardData = async () => {
      try {
        // const res = await axios.get(`https://grabbme.vercel.app/board/project/${id}`);
        // const { data } = res.data;
        const data = {
          post_id: 109,
          title: '댕댕이 산책시키기 위치 공유 어플 개발자를 모집합니다.',
          content:
            '반려견과 함께 산책하는 즐거움을 더 큰 커뮤니티로 확장하고, 반려인들이 서로 교류할 수 있는 플랫폼을 만들기 위해 댕댕이 산책 위치 공유 어플을 개발할 개발자를 모집합니다. 이 어플은 산책 중인 반려견의 실시간 위치를 공유하고, 같은 지역에 사는 반려인들이 쉽게 만나고 함께 산책할 수 있는 기회를 제공합니다. 또한, 산책 경로를 기록하고 추천하며, 반려견 주인들 간의 소통을 돕는 다양한 기능을 제공할 예정입니다.',
          start_month: '2024-10',
          end_month: '2024-12',
          create_at: '2024-09-16',
          expired_at: '2024-09-28',
          view_cnt: 36,
          bookmarked_cnt: 15,
          chat_cnt: 3,
          project_category_id: [3, 4, 8, 9],
          stack_category_id: [1, 6],
        };
        setDetail({
          ...data,
          create_at: formatCreatedDate(data.create_at),
          expired_at: formatExpiredDate(data.expired_at),
          start_month: formatPeriodDate(data.start_month),
          end_month: formatPeriodDate(data.end_month),
        });
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
          <StoryContainer>
            <RowContainer>
              <CountBox variant="view" count={detail.view_cnt} />
              <CountBox variant="bookmark" count={detail.bookmarked_cnt} />
              <CountBox variant="chat" count={detail.chat_cnt} />
            </RowContainer>
          </StoryContainer>
        </TitleInfo>
      </HeaderContainer>
      <BasicInfoContainer>
        <InfoItem>
          <ItemTitle>모집 마감</ItemTitle>
          <ItemContent>{detail.expired_at} 까지</ItemContent>
        </InfoItem>
        <InfoItem>
          <ItemTitle>카테고리</ItemTitle>
          <ItemContent>
            <TagList>
              {detail.project_category_id.map((id) => (
                <Tag>{categoryList.find((category) => category.id === Number(id))?.item}</Tag>
              ))}
            </TagList>
          </ItemContent>
        </InfoItem>
        <InfoItem>
          <ItemTitle>기술 스택</ItemTitle>
          <ItemContent>
            <TagList>
              {detail.stack_category_id.map((id) => (
                <Tag>{techStackList.find((stack) => stack.id === Number(id))?.item}</Tag>
              ))}
            </TagList>
          </ItemContent>
        </InfoItem>
        <InfoItem>
          <ItemTitle>진행 기간</ItemTitle>
          <ItemContent>
            {detail.start_month} - {detail.end_month}
          </ItemContent>
        </InfoItem>
      </BasicInfoContainer>
      <RecruitStatusContainer>
        <ContainerTitle>모집 현황</ContainerTitle>
        <RecruitStatusWrapper>
          {rsItems.map((item) => (
            <RecruitStatusItem key={item.name}>
              <RSItemTitle>{item.name}</RSItemTitle>
              <RSProgressBar>
                <ProgressBar totalCnt={item.totalCnt} acceptedCnt={item.acceptedCnt} />
              </RSProgressBar>
              <RSButton>
                {isAuthor ? (
                  <Button variant="primary" size="sm">
                    신청자 리스트
                  </Button>
                ) : (
                  <Button variant="primary" size="sm">
                    신청하기
                  </Button>
                )}
              </RSButton>
            </RecruitStatusItem>
          ))}
        </RecruitStatusWrapper>
      </RecruitStatusContainer>
      <DetailInfoContainer>
        <ContainerTitle>프로젝트 소개</ContainerTitle>
        <DetailInfoWrapper>{detail.content}</DetailInfoWrapper>
      </DetailInfoContainer>
      <FooterContainer>
        <Button variant="primary" size="sm" icon={<IcBookmark />}>
          북마크
        </Button>
        <Button variant="primary" size="sm" icon={<IcChatStart />}>
          채팅하기
        </Button>
        <Button variant="primary" size="sm" icon={<IcList />}>
          목록으로
        </Button>
      </FooterContainer>
    </>
  );
};
