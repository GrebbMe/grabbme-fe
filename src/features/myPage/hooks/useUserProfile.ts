import { useQuery } from 'react-query';
import { getUserProfile } from '@/features/myPage/api/getUserProfile';
import { UserProfileResponse } from '@/features/myPage/model/UserProfileResponse';

export const useUserProfile = (userId: number) => {
  const { data: userProfile } = useQuery<UserProfileResponse>({
    queryKey: ['userProfile', userId],
    queryFn: () => getUserProfile(userId),
    enabled: !!userId,
    staleTime: 60000,
    cacheTime: 300000,
    retry: 1,
  });

  if (userProfile) {
    console.log('코리코리', userProfile);
    console.log('데이터는', userProfile.data);
    console.log('데이터는', userProfile.data.email);
  } else {
    console.log('유저 프로필이 없습니다.');
  }
  return { userProfile };
};
