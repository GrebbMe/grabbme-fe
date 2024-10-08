import { useRef, useState } from 'react';
import ArrowDownIcon from '@/shared/assets/arrow-down.svg?react';
import ArrowUpIcon from '@/shared/assets/arrow-up.svg?react';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import { RemoveButton, AddButton } from '@/shared/ui';
import * as S from '@/shared/ui/select/MultiSelect.style';

export interface SelectItem {
  id: number;
  item: string;
}

export interface MultiSelectProps {
  items: SelectItem[];
  selectedItems: SelectItem[];
  onClickSelectedItems: (selectedItems: SelectItem[]) => void;
  selectLimit: number;
  placeholder: string;
}

export const MultiSelect = ({
  items,
  selectedItems,
  onClickSelectedItems,
  selectLimit,
  placeholder,
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeSelectOption = () => setIsOpen(false);

  useOutsideClick({ ref: containerRef, handler: closeSelectOption });

  const handleAddItem = (item: SelectItem) => {
    if (
      selectedItems.length < selectLimit &&
      !selectedItems.some((selectedItem) => selectedItem.id === item.id)
    ) {
      onClickSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (itemId: number, event: React.MouseEvent) => {
    onClickSelectedItems(selectedItems.filter((item) => item.id !== itemId));
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
