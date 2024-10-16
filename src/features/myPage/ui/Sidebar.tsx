import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Sidebar.style';
import { routerPath } from '@/shared';

const sidebarItems = [
  { id: 'myProfile', label: '내 프로필', path: routerPath.MY_PROFILE },
  { id: 'myPosts', label: '작성글', path: routerPath.MY_POSTS },
  { id: 'myBookmarks', label: '북마크', path: routerPath.MY_BOOKMARKS },
  { id: 'myProjects', label: '신청 프로젝트', path: routerPath.MY_PROJECTS },
];

export interface SidebarItemProps {
  isActive: boolean;
}
interface SidebarItem {
  id: string;
  label: string;
  path: string;
}

const Sidebar = () => {
  const [activeLabelId, setactiveLabelId] = useState<string>('myProfile');
  const navigate = useNavigate();

  const handleItemClick = (item: SidebarItem) => {
    setactiveLabelId(item.id);
    navigate(item.path);
  };

  return (
    <S.SidebarContainer>
      {sidebarItems.map((item) => (
        <S.SidebarItem
          key={item.id}
          isActive={activeLabelId === item.id}
          onClick={() => handleItemClick(item)}
        >
          {item.id}
        </S.SidebarItem>
      ))}
    </S.SidebarContainer>
  );
};

export default Sidebar;
