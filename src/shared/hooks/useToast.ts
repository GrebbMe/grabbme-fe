import { useEffect } from 'react';
import { ToastSize, useToastStore } from '@/shared/stores/toastStore';
import { ToastProps } from '@/shared/stores/toastStore';

const DURATION = 3000;

export const useToast = () => {
  const { toast, setToast, clearToast } = useToastStore();

  const showToast = (content: string, size: ToastSize) => {
    const toast: ToastProps = {
      content,
      size,
    };

    setToast(toast);
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
