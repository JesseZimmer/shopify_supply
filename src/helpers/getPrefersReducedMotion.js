const getPrefersReducedMotion = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  const query = '(prefers-reduced-motion: no-preference)';
  const mediaQueryList = window.matchMedia(query);
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
};

export default getPrefersReducedMotion;
