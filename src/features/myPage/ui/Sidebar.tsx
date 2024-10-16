import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Sidebar.style';
import { routerPath } from '@/shared';

const sidebarItems = [
  { label: '내 프로필', path: routerPath.MY_PROFILE },
  { label: '작성글', path: routerPath.MY_POSTS },
  { label: '북마크', path: routerPath.MY_BOOKMARKS },
  { label: '신청 프로젝트', path: routerPath.MY_PROJECTS },
];

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
