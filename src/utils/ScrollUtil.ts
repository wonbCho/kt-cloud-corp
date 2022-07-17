const getCurrentScrollTop = () => Math.max(
  document.documentElement.scrollTop || 0,
  document.body.scrollTop || 0,
  window.pageYOffset || 0,
);

const scrollTop = (isSmooth = false) => {
  try {
    if (isSmooth) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  } catch (error) {
    window.scrollTo(0, 0);
  }
};

const moveTo = (target: HTMLElement, isSmooth?: boolean, diff?: number) => {
  const posY = target.offsetTop - (diff || 0);

  try {
    if (isSmooth) {
      window.scroll({ top: posY, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, posY);
    }
  } catch (error) {
    window.scrollTo(0, posY);
  }
};

export default {
  getCurrentScrollTop,
  scrollTop,
  moveTo,
};
