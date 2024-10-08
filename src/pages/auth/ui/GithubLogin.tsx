import { useModal } from '@/shared/hooks/useModal';
import { useToast } from '@/shared/hooks/useToast';
import { Toast } from '@/shared/ui/toast/Toast';

export const GithubLogin = () => {
  const { showToast } = useToast();
  const { showModal } = useModal();

  const handleShowModal = () => {
    showModal({
      content: '그그그그그그그그그그그그그그그그그그그그그그그그',
      type: 'confirm',
      onConfirm: () => alert('그그'),
    });
  };
  return (
    <div>
      <button type="button" onClick={handleShowModal}>
        Show Toast
      </button>
      <Toast />
    </div>
  );
};
