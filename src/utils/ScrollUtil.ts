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

export default {
  getCurrentScrollTop,
  scrollTop,
};
