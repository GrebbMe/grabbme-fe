import { useRef, useState } from 'react';
import ArrowDown from '@/shared/assets/arrow-down.svg?react';
import ArrowUp from '@/shared/assets/arrow-up.svg?react';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import * as S from '@/shared/ui/select/selectList.style';

type SelectListSize = 'sm' | 'md' | 'lg';

export interface SelectListItem {
  value: string;
  label: string;
}

export interface SelectListProps {
  items: SelectListItem[];
  size: SelectListSize;
  placeholder?: string;
  selected: SelectListItem | null;
  onChangeSelected: (item: SelectListItem) => void;
}

export const SelectList = ({
  items,
  size,
  placeholder,
  selected,
  onChangeSelected,
}: SelectListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const containerRef = useRef<HTMLDivElement>(null);

  const closeSelectOption = () => setIsOpen(false);

  useOutsideClick({ ref: containerRef, handler: closeSelectOption });

  const handleItemClick = (item: SelectListItem) => {
    onChangeSelected(item);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer ref={containerRef} size={size}>
      <S.DropdownHeader onClick={toggleDropdown} isOpen={isOpen}>
        {selected ? selected.label : <S.Placeholder>{placeholder}</S.Placeholder>}
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownListContainer>
          {items.map((item) => (
            <S.DropdownListItem
              key={item.value}
              onClick={() => handleItemClick(item)}
              isSelected={selected ? item.value === selected.value : false}
            >
              {item.label}
            </S.DropdownListItem>
          ))}
        </S.DropdownListContainer>
      )}
    </S.DropdownContainer>
  );
};
