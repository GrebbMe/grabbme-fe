import { RefObject, useEffect } from 'react';

interface UseOutsideClickParams {
  ref: RefObject<HTMLElement>;
  handler: (event: MouseEvent) => void;
}

export const useOutsideClick = ({ ref, handler }: UseOutsideClickParams) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
