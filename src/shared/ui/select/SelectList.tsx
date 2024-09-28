import { useState } from 'react';
import {
  DropdownContainer,
  DropdownHeader,
  DropdownListContainer,
  DropdownListItem,
  StyledIcon,
} from '@/shared/ui/select/selectList.style';

interface SelectListProps {
  items: string[];
  width: 'short' | 'medium' | 'long';
}

export const SelectList = ({ items, width }: SelectListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const widthMap: { short: string; medium: string; long: string } = {
    short: '28.8rem',
    medium: '49.6rem',
    long: '80.8rem',
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer width={widthMap[width]}>
      <DropdownHeader onClick={toggleDropdown} isOpen={isOpen}>
        {selectedItem || '선택'}
        <StyledIcon icon={isOpen ? 'iconamoon:arrow-up-2' : 'iconamoon:arrow-down-2'} />
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          {items.map((item, index) => (
            <DropdownListItem
              key={index}
              onClick={() => handleItemClick(item)}
              isSelected={item === selectedItem}
            >
              {item}
            </DropdownListItem>
          ))}
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};
