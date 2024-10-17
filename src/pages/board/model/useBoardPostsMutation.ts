import { useQuery } from '@tanstack/react-query';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getBoardPosts } from '@/pages/board/api/getBoardPosts';

export const useBoardPostsMutation = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const search = searchParams.get('search') || '';
  const stack = searchParams.get('stack') || '';
  const page = Number(searchParams.get('page') || '1');

  const currentPath = location.pathname === '/grabbzone' ? 2 : 1;

  const {
    data: boardPosts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['boardPosts', search, stack, page],
    queryFn: () => getBoardPosts({ search, stack, page, currentPath }),
  });

  return { data: boardPosts, isLoading, error };
};
