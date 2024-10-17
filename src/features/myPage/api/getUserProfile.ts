import { UserProfileResponse } from '@/features/myPage/model/UserProfileResponse';
import axiosInstance from '@/shared/api/axiosInstance';

export const getUserProfile = async (id: number) => {
  const { data } = await axiosInstance.get<UserProfileResponse>(`/user/${id}`);
  return data;
};
