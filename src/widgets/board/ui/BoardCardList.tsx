import { BoardCard, BoardCardProps } from '@/features/board/ui';
import * as S from '@/widgets/board/ui/BoardCardList.style';

interface BoardCardList {
  boardCardList: BoardCardProps[];
}

const BoardCardList = ({ boardCardList }: BoardCardList) => {
  return (
    <>
      {boardCardList.map((card) => (
        <S.PostWrapper key={card.id}>
          <BoardCard {...card} />
        </S.PostWrapper>
      ))}
    </>
  );
};

export default BoardCardList;
