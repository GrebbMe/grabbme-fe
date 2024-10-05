import { useEffect } from 'react';
import { ToastMessage, useToastStore } from '@/shared/stores/toastStore';

const DURATION = 3000;

export const useToast = () => {
  const { toast, setToast, clearToast } = useToastStore();

  const showToast = ({ content, size }: ToastMessage) => {
    setToast({
      content,
      size,
    });
  };

  useEffect(() => {
    if (toast) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        clearToast();
      }, DURATION);

      return () => clearTimeout(timer);
    }
  }, [toast, clearToast]);

  return { showToast };
};
