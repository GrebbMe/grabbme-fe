import { useQuery } from 'react-query';
import { getStackCategoryById } from '@/features/user/api/getStackCategoryById';

export const useStackCategoryNames = (stackIds: number[]) => {
  const { data, isLoading, error } = useQuery(
    ['stackCategories', stackIds],
    async () => {
      const responses = await Promise.all(stackIds.map((id) => getStackCategoryById(id)));
      return responses.map((response, index) => ({
        id: stackIds[index].toString(),
        label: response.name,
      }));
    },
    {
      enabled: stackIds.length > 0,
      staleTime: 60000,
      retry: 1,
    },
  );

  return { stackNames: data, isLoading, error };
};
