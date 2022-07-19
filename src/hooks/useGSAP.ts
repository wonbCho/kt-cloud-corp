import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

const useGSAP = () => {
  const getGSAPQuerySelector = (value: string) => {
    return `[data-gsap='${value}']`;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
  }, []);

  return {
    gsap,
    ScrollTrigger,
    getGSAPQuerySelector
  };
};

export default useGSAP;
