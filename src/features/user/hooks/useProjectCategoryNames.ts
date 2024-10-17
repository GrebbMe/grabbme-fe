import { useQuery } from 'react-query';
import { getProjectCategoryById } from '@/features/user/api/getProjectCategoryById';

export const useProjectCategoryNames = (projectIds: number[]) => {
  const { data, isLoading, error } = useQuery(
    ['projectCategories', projectIds],
    async () => {
      const responses = await Promise.all(projectIds.map((id) => getProjectCategoryById(id)));
      return responses.map((response, index) => ({
        id: projectIds[index].toString(),
        label: response.name,
      }));
    },
    {
      enabled: projectIds.length > 0,
      staleTime: 60000,
      retry: 1,
    },
  );

  return { projectNames: data, isLoading, error };
};
