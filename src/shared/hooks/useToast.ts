import { useEffect } from 'react';
import { useToastStore } from '@/shared/stores/toastStore';
import { ToastProps } from '@/shared/stores/toastStore';

const DURATION = 2500;

export const useToast = () => {
  const { toast, setToast, clearToast } = useToastStore();

  const showToast = (content: string, size: 'lg' | 'md' | 'sm') => {
    const id: number = new Date().getTime();
    const toast: ToastProps = {
      id,
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
