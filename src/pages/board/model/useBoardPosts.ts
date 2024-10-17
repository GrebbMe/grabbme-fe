//TODO : API 연동 후 추가 작성

// import { useQuery } from '@tanstack/react-query';
// import { useSearchParams } from 'react-router-dom';
// import { getBoardPosts } from '@/pages/board/api/getBoardPosts';
// import { useToast } from '@/shared/hooks/useToast';

// export const useBoardPosts = () => {
//   const [searchParams] = useSearchParams();
//   const { showToast } = useToast();

//   const search = searchParams.get('search') || '';
//   const stack = searchParams.get('stack') || '';
//   const page = Number(searchParams.get('page') || '1');

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['boardPosts', { search, stack, page }],
//     queryFn: () => getBoardPosts({ search, stack, page }),
//   });

//   return { data, isLoading, error };
// };
