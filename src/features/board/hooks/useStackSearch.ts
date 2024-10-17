import { useLocation, useNavigate } from 'react-router-dom';

export const useStackSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStackSearch = (stack: number) => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      navigate(`/project?stack=${stack}`);
    } else {
      navigate(`${currentPath}?stack=${stack}`);
    }
  };

  return { handleStackSearch };
};
