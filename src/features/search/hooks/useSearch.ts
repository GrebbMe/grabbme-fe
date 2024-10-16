import { ChangeEvent, FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useSearch = () => {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const currentPath = location.pathname;
    if (currentPath === '/') {
      navigate(`/project?search=${query.replace(/\s+/g, '+')}`);
    } else {
      navigate(`${currentPath}?search=${query.replace(/\s+/g, '+')}`);
    }
  };

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return { query, handleQueryChange, handleSearch };
};
