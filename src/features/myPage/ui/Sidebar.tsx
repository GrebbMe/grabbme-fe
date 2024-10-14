import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Sidebar.style';
import { sidebarItems } from '@/features/myPage/consts/sidebarItems.ts';

export interface SidebarItemProps {
  isActive: boolean;
}
interface SidebarItem {
  label: string;
  path: string;
}

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>('내 프로필');
  const navigate = useNavigate();

  const handleItemClick = (item: SidebarItem) => {
    setActiveItem(item.label);
    navigate(item.path);
  };

  return (
    <S.SidebarContainer>
      {sidebarItems.map((item) => (
        <S.SidebarItem
          key={item.label}
          isActive={activeItem === item.label}
          onClick={() => handleItemClick(item)}
        >
          {item.label}
        </S.SidebarItem>
      ))}
    </S.SidebarContainer>
  );
};

export default Sidebar;
