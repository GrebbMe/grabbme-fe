import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { registerProject } from '@/pages/post/api/registerProject';
import { useToast } from '@/shared/hooks/useToast';

export const useRegisterProject = () => {
  const { showToast } = useToast();

  const {
    mutate: registerProjectMutation,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: registerProject,
    onSuccess: () => {},
    onError: () => {
      showToast({ content: '프로젝트 등록 실패', size: 'lg' });
    },
  });

  return { registerProjectMutation, isError, isSuccess };
};
