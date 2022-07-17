import ScrollUtil from '@src/utils/ScrollUtil';
import { useEffect, useState } from 'react';

const useScrollFixed = () => {
  const [useScroll, setUseScroll] = useState<boolean>(false);

  const onScroll = () => {
    const scrollPosY = ScrollUtil.getCurrentScrollTop();

    setUseScroll(!!scrollPosY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { useScroll };
};

export default useScrollFixed;
