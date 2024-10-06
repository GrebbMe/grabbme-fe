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
  const handleRemoveItem = (itemId: number) => {
    onSelect((prev) => prev.filter((item) => item.id !== itemId));
  };

  const isDefaultInput: boolean = selectedItems.length === 0 && isOpen === false;
  const isNotEmpty: boolean = selectedItems.length > 0 && isOpen === false;

  return (
    <S.Container ref={containerRef}>
      <S.ItemInput
        className={isDefaultInput ? 'default-input' : isNotEmpty ? 'not-empty-input' : undefined}
        onClick={isDefaultInput ? () => setIsOpen(true) : undefined}
      >
        {isDefaultInput && <span>{placeholder}</span>}
        <S.InputButtonBox>
          {selectedItems.map((item) => (
            <RemoveButton key={item.id} onClick={() => handleRemoveItem(item.id)}>
              {item.item}
            </RemoveButton>
          ))}
        </S.InputButtonBox>
        {isOpen ? (
          <S.IconWrapper onClick={() => setIsOpen(false)}>
            <ArrowUpIcon />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <ArrowDownIcon />
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
