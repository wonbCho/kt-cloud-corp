import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import SplitText from 'gsap/SplitText';

const useGSAP = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
  }, []);

  return {
    gsap
  };
};

export default useGSAP;
