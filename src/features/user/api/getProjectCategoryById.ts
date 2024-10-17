import axiosInstance from '@/shared/api/axiosInstance';

export const getProjectCategoryById = async (id: number) => {
  const response = await axiosInstance.get(`/public-data/project-categories/${id}`);
  return response.data.name;
};
