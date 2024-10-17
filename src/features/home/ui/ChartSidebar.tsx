import { useState } from 'react';
import { RecentStackButton, SidebarContainer, TotalApplicationsButton } from './ChartSidebar.style';

export const ChartSidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = (buttonName: 'stack' | 'apply'): void => {
    setIsActive(buttonName === 'stack');
  };

  return (
    <SidebarContainer>
      <RecentStackButton autoFocus onClick={() => handleClick('stack')} isActive={isActive}>
        최근 인기 스택
      </RecentStackButton>
      <TotalApplicationsButton onClick={() => handleClick('apply')} isActive={!isActive}>
        누적 지원 횟수
      </TotalApplicationsButton>
    </SidebarContainer>
  );
};
