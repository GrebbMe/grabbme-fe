import axiosInstance from '@/shared/api/axiosInstance';

export const getStackCategoryById = async (id: number) => {
  const response = await axiosInstance.get(`/public-data/stack-categories/${id}`);
  return response.data.name;
};
