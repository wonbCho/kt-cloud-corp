import { useEffect } from 'react';

const useNoScroll = (state: boolean[]) => {
  useEffect(() => {
    if (state.some(item => item)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [...state]);
};

export default useNoScroll;
