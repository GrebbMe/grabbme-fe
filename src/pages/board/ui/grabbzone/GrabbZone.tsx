import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BoardCardProps, Pagination, SearchBar, StackSearch } from '@/features/board/ui';
import { boardPostFetch } from '@/pages/board/model/boardPostFetch';
import { useBoardPostsMutation } from '@/pages/board/model/useBoardPostsMutation';
import * as S from '@/pages/board/ui/grabbzone/GrabbZone.style';
import { IcPost } from '@/shared/assets';
import { Button } from '@/shared/ui';
import BoardCardList from '@/widgets/board/ui/BoardCardList';

const GrabbZone = () => {
  const { data: boardPosts, isLoading } = useBoardPostsMutation();
  const [query, setQuery] = useState('');
  const [fixedBoardPosts, setFixedBoardPosts] = useState<any>();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search');
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [location.search]);

  useEffect(() => {
    if (boardPosts && !fixedBoardPosts) {
      setFixedBoardPosts(boardPosts);
    }
  }, [boardPosts, fixedBoardPosts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.Header>관심있는 주제의 프로젝트를 찾아보세요!</S.Header>
      <S.SearchBox>
        <SearchBar query={query} setQuery={setQuery} />
        <StackSearch />
      </S.SearchBox>
      <S.PostListLabel>
        그랩존 리스트
        <Button
          type="button"
          icon={<IcPost />}
          variant="primary"
          size="sm"
          onClick={() => navigate('/register/grabbzone')}
        >
          그랩존 등록
        </Button>
      </S.PostListLabel>
      <BoardCardList boardCardList={boardPostFetch(boardPosts.data.posts)} />
      <S.PaginationWrapper>
        <Pagination totalPages={Math.ceil(boardPosts.data.totalPost / 5)} />
      </S.PaginationWrapper>
    </>
  );
};

export default GrabbZone;
