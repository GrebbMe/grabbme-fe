import { useLocation, useNavigate } from 'react-router-dom';
import { BoardCard, BoardCardProps } from '@/features/board/ui';
import * as S from '@/widgets/board/ui/BoardCardList.style';

interface BoardCardList {
  boardCardList: BoardCardProps[];
}

const BoardCardList = ({ boardCardList }: BoardCardList) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {boardCardList.map((card) => (
        <S.PostWrapper key={card.id} onClick={() => navigate(`${location.pathname}/${card.id}`)}>
          <BoardCard {...card} />
        </S.PostWrapper>
      ))}
    </>
  );
};

export default BoardCardList;
