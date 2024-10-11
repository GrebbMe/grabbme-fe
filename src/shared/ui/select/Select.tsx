import { useRef, useState } from 'react';
import ArrowDown from '@/shared/assets/svg/IcArrowDown.svg?react';
import ArrowUp from '@/shared/assets/svg/IcArrowUp.svg?react';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import * as S from '@/shared/ui/select/Select.style';

type SelectListSize = 'sm' | 'md' | 'lg';

export interface SelectListItem {
  id: number;
  label: string;
}

export interface SelectListProps {
  items: SelectListItem[];
  size: SelectListSize;
  placeholder?: string;
  selected: SelectListItem | null;
  onChangeSelected: (item: SelectListItem) => void;
}

const Select = ({ items, size, placeholder, selected, onChangeSelected }: SelectListProps) => {
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
      <S.DropdownHeader onClick={toggleDropdown} $isOpen={isOpen}>
        {selected?.label ? selected.label : <S.Placeholder>{placeholder}</S.Placeholder>}
        {isOpen ? <ArrowDown /> : <ArrowUp />}
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownListContainer>
          {items.map((item) => (
            <S.DropdownListItem
              key={item.id}
              onClick={() => handleItemClick(item)}
              $isSelected={selected ? item.id === selected.id : false}
            >
              {item.label}
            </S.DropdownListItem>
          ))}
        </S.DropdownListContainer>
      )}
    </S.DropdownContainer>
  );
};

export default Select;
