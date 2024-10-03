import { useToast } from '@/shared/hooks/useToast';
import { Toast } from '@/shared/ui/toast/Toast';

export const GithubLogin = () => {
  const { showToast } = useToast();

  const handleShowToast = () => {
    showToast('dddd.', 'sm');
  };
  return (
    <div>
      <button onClick={handleShowToast}>Show Toast</button>
      <Toast />
    </div>
  );
};
