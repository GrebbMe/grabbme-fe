import { useRef, useState } from 'react';
import ArrowDownIcon from '@/shared/assets/arrow-down.svg?react';
import ArrowUpIcon from '@/shared/assets/arrow-up.svg?react';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import { RemoveButton, AddButton } from '@/shared/ui';
import * as S from '@/shared/ui/select/MultipleSelectList.style';
export interface SelectItem {
  id: number;
  item: string;
}
export interface MultipleSelectListProps {
  items: SelectItem[];
  selectedItems: { id: number; item: string }[];
  onSelect: React.Dispatch<React.SetStateAction<SelectItem[]>>;
  selectLimit: number;
  placeholder: string;
}
export const MultipleSelectList = ({
  items,
  selectedItems,
  onSelect,
  selectLimit,
  placeholder,
}: MultipleSelectListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef: React.RefObject<HTMLDivElement> = useRef(null);

  useOutsideClick({ ref: containerRef, handler: () => setIsOpen(false) });

  const handleAddItem = (item: { id: number; item: string }) => {
    if (selectedItems.length < selectLimit && !selectedItems.includes(item)) {
      onSelect((prev) => [...prev, item]);
    }
  };
  const handleRemoveItem = (itemId: number, event: React.MouseEvent) => {
    onSelect((prev) => prev.filter((item) => item.id !== itemId));
    event.stopPropagation();
  };

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Container ref={containerRef}>
      <S.ItemInput $isOpen={isOpen} onClick={() => setIsOpen(true)}>
        {selectedItems.length === 0 && <span>{placeholder}</span>}
        <S.InputButtonBox>
          {selectedItems.map((item) => (
            <RemoveButton key={item.id} onClick={(e) => handleRemoveItem(item.id, e)}>
              {item.item}
            </RemoveButton>
          ))}
        </S.InputButtonBox>
        {isOpen ? (
          <S.IconWrapper onClick={handleIconClick}>
            <ArrowDownIcon />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper onClick={handleIconClick}>
            <ArrowUpIcon />
          </S.IconWrapper>
        )}
      </S.ItemInput>
      {isOpen && (
        <div className="stack-box">
          {items.map((item) => (
            <AddButton key={item.id} onClick={() => handleAddItem(item)}>
              {item.item}
            </AddButton>
          ))}
        </div>
      )}
    </S.Container>
  );
};
