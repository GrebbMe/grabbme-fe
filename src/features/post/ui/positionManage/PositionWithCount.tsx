import { IcMinus, IcPlus, IcTrash } from '@/features/post';
import * as S from '@/features/post/ui/positionManage/PositionWithCount.style';
import Select, { SelectListItem } from '@/shared/ui/select/Select';

export interface Position extends SelectListItem {
  count: number;
}

interface SelectListWithCountProps {
  positions: Position[];
  setPositions: (newPositions: Position[]) => void;
  totalCount: number;
  setTotalCount: (newTotalCount: number) => void;
}

const POSITION_LIST: SelectListItem[] = [
  { id: 0, label: 'Option 0' },
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 4, label: 'Option 4' },
  { id: 5, label: 'Option 5' },
];

const PositionWithCount = ({
  positions,
  setPositions,
  totalCount,
  setTotalCount,
}: SelectListWithCountProps) => {
  const handleAddPosition = () => {
    if (positions.length < 5 && totalCount < 10) {
      const newItem = { id: -Date.now(), label: '', count: 1 };
      setPositions([...positions, newItem]);
      setTotalCount(totalCount + 1);
    }
  };

  const handleRemovePosition = (id: number) => {
    if (positions.length === 1) {
      setPositions([{ id: -Date.now(), label: '', count: 1 }]);
      setTotalCount(1);
      return;
    }
    const removedPosition = positions.find((item) => item.id === id);
    if (removedPosition) {
      setTotalCount(totalCount - removedPosition.count);
    }
    const newPositions = positions.filter((item) => item.id !== id);
    setPositions(newPositions);
  };

  const handleUpdatePositions = (id: number, newItem: SelectListItem) => {
    const newPositions = positions.map((item) =>
      item.id === id ? { ...item, id: newItem.id, label: newItem.label } : item,
    );
    setPositions(newPositions);
  };

  const handleIncrementCount = (id: number) => {
    if (totalCount < 10) {
      const newPosition = positions.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      );
      setPositions(newPosition);
      setTotalCount(totalCount + 1);
    }
  };

  const handleDecrementCount = (id: number) => {
    const item = positions.find((item) => item.id === id);
    if (item && item.count > 1) {
      const newPosition = positions.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item,
      );
      setPositions(newPosition);
      setTotalCount(totalCount - 1);
    }
  };

  const availablePositions = POSITION_LIST.filter(
    (item) => !positions.some((selected) => selected.id === item.id),
  );

  return (
    <S.Container>
      {positions.map((position) => (
        <S.Wrapper key={position.id}>
          <Select
            items={availablePositions}
            size="sm"
            placeholder="선택"
            selected={{ id: position.id, label: position.label }}
            onChangeSelected={(item) => handleUpdatePositions(position.id, item)}
          />
          <S.MinusButton type="button" onClick={() => handleDecrementCount(position.id)}>
            <IcMinus />
          </S.MinusButton>
          <span>{position.count}</span>
          <S.PlusButton type="button" onClick={() => handleIncrementCount(position.id)}>
            <IcPlus />
          </S.PlusButton>
          <S.TrashButton type="button" onClick={() => handleRemovePosition(position.id)}>
            <IcTrash />
          </S.TrashButton>
        </S.Wrapper>
      ))}
      {positions.length < 5 && totalCount < 10 && (
        <S.AddPositionButton onClick={handleAddPosition}>
          <IcPlus />
          추가
        </S.AddPositionButton>
      )}
    </S.Container>
  );
};

export default PositionWithCount;
