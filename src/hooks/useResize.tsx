import React, { createContext, useContext, useState, useEffect } from 'react';
import { throttle } from 'lodash';

const ResizeContext = createContext({
  width: window.innerWidth,
  height: window.innerHeight,
  isPCSize: window.innerWidth >= 1440,
  isMobileSize: window.innerWidth < 1440,
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
    isPCSize: width >= 1440,
    isMobileSize: width < 1440,
  };
}

const ResizeProvider = ({ children }: { children: any }) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function handleResize() {
    const { innerWidth: width, innerHeight: height } = window;

    setWindowDimensions({
      width,
      height,
      isPCSize: width >= 1440,
      isMobileSize: width < 1440,
    });
  }

  const throttledHandleResize = throttle(handleResize, 100);

  useEffect(() => {
    window.addEventListener('resize', throttledHandleResize);
    window.addEventListener('focus', handleResize);
    return () => {
      window.removeEventListener('resize', throttledHandleResize);
      window.removeEventListener('focus', handleResize);
    };
  }, []);

  return <ResizeContext.Provider value={windowDimensions}>
    {children}
  </ResizeContext.Provider>;
};

export default ResizeProvider;
export const useResize = () => useContext(ResizeContext);
