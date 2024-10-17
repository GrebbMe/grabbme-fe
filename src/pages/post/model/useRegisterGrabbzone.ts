import { useMutation } from '@tanstack/react-query';
import { registerGrabbZone } from '@/pages/post/api/registerGrabbZone';
import { useToast } from '@/shared/hooks/useToast';

export const useRegisterGrabbzone = () => {
  const { showToast } = useToast();

  const {
    mutate: registerGrabbzoneMutation,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: registerGrabbZone,
    onSuccess: () => {},
    onError: () => {
      showToast({ content: '프로젝트 등록 실패', size: 'lg' });
    },
  });

  return { registerGrabbzoneMutation, isError, isSuccess };
};
