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
  TagList,
  Title,
  TitleInfo,
  TitleWrapper,
} from '@/pages/post/grabbzone/GrabbZoneDetail.style';
import { IcBookmark, ProfileIcon, IcChatStart, IcList } from '@/shared/assets';
import { useFetchCategories } from '@/shared/hooks/useFetchCategories';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui';
import CountBox from '@/shared/ui/countBox/CountBox';
import { RowContainer, StoryContainer } from '@/shared/ui/storybook/story.style';
import Tag from '@/shared/ui/tag/Tag';

interface GrabbzoneDetailResponse {
  post_id: number;
  title: string;
  content: string;
  create_at: string;
  chat_cnt: number;
  view_cnt: number;
  bookmarked_cnt: number;
  //! position 없음
  position_category_id: number;
  career_category_id: number;
  project_category_id: number[];
  stack_category_id: number[];
}

export const GrabbZoneDetail = () => {
  const [profileImage, setProfileImage] = useState('');
  const [isAuthor, setIsAuthor] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>('user nickname');

  const { jobPosition, careerYear, techStackList, categoryList } = useFetchCategories();

  const [detail, setDetail] = useState<GrabbzoneDetailResponse>({
    post_id: 0,
    title: '',
    content: '',
    create_at: '',
    view_cnt: 0,
    bookmarked_cnt: 0,
    chat_cnt: 0,
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
        // const res = await axios.get(`https://grabbme.vercel.app/board/grabbzone/${id}`);
        // setDetail({ ...res.data.data });
        const data = {
          post_id: 110,
          title: '성실한 개발자 머쓱이입니다.',
          content: `안녕하세요, 저는 [이름], 다양한 프로젝트에서 쌓아온 경험과 기술력을 바탕으로 끊임없이 성장하는 소프트웨어 개발자입니다. 사용자 경험을 최우선으로 하는 프론트엔드와, 견고하고 확장 가능한 백엔드 시스템 설계에 관심이 많습니다. 저는 최신 기술 트렌드에 발맞추어 나가면서도, 문제 해결 능력과 창의적인 사고로 항상 더 나은 결과를 도출하고자 노력합니다.

주요 기술 스택

저의 전문 기술 스택은 프론트엔드와 백엔드 개발 모두를 포함하며, 프로젝트의 요구 사항에 맞춰 다양한 언어와 프레임워크를 유연하게 사용할 수 있습니다.

	•	프론트엔드: 저는 React.js, Vue.js, Angular 같은 현대적인 자바스크립트 프레임워크를 사용해 사용자 인터페이스를 구축합니다. UI/UX 디자인에 대한 깊은 이해를 바탕으로, 사용자가 직관적으로 경험할 수 있는 인터페이스를 만드는 것을 목표로 하고 있습니다. CSS-in-JS, Sass 등을 활용하여 모던한 스타일링 기법을 적용하고 있으며, React Native나 Flutter를 통해 크로스플랫폼 모바일 앱 개발 경험도 가지고 있습니다.
	•	백엔드: Node.js, Express, NestJS를 주로 사용하여 안정적이고 확장 가능한 서버를 개발합니다. 또한 MongoDB, PostgreSQL, MySQL 등 다양한 데이터베이스와의 연동 경험이 있으며, 데이터의 효율적인 처리와 최적화에도 집중합니다. 대규모 트래픽을 처리할 수 있는 시스템을 설계하는 데 중점을 두며, 서버 성능 최적화와 확장성 있는 인프라 구축에 관심이 많습니다.
	•	DevOps 및 클라우드 인프라: 저는 AWS, GCP, Docker, Kubernetes와 같은 클라우드 인프라와 도구들을 활용해 애플리케이션을 배포하고 관리합니다. CI/CD 파이프라인을 설정해 자동화된 배포 프로세스를 구축하고, 애플리케이션이 안정적으로 동작할 수 있도록 모니터링 및 로깅을 설정하는 경험도 갖고 있습니다.`,
          create_at: '2024-10-15',
          view_cnt: 504,
          bookmarked_cnt: 43,
          chat_cnt: 23,
          career_category_id: 3,
          position_category_id: 2,
          project_category_id: [3, 4, 5],
          stack_category_id: [4, 5],
        };
        setDetail(data);
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
          <ItemTitle>희망 직군</ItemTitle>
          {/* <ItemContent>{detail.position_category_id} 까지</ItemContent> */}
          <ItemContent>2024. 10. 29 까지</ItemContent>
        </InfoItem>
        <InfoItem>
          <ItemTitle>개발경력</ItemTitle>
          {/* <ItemContent>{detail.career_category_id}</ItemContent> */}
          <ItemContent>1년차 ~ 3년차</ItemContent>
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
      </BasicInfoContainer>
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
