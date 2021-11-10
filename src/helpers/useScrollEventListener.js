import {useCallback, useEffect, useRef, useState} from 'react';

import {getSession} from './sessionStorage';

const useScrollEventListener = () => {
  const [useAltCSS, setUseAltCSS] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const prevScrollY = useRef(0);
  const hiddenInSession = getSession('hideNotification') === 'true';

  const handleScroll = useCallback(() => {
    if (scrollY === 0 && useAltCSS) {
      setUseAltCSS(false);
    } else if (scrollY > 0 && !useAltCSS) {
      setUseAltCSS(true);
    }

    const delta = prevScrollY.current - scrollY;

    if (!hiddenInSession) {
      if (delta < -10 && showNav) {
        setShowNav(false);
      }
      if (delta > 10 && !showNav) {
        setShowNav(true);
      }
    }

    prevScrollY.current = scrollY;
  }, [hiddenInSession, showNav, useAltCSS]);

  const handleNavHidden = useCallback(() => {
    if (hiddenInSession && showNav) {
      setShowNav(false);
    }
  }, [hiddenInSession, showNav]);

  useEffect(() => {
    handleNavHidden();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, handleNavHidden]);

  return {useAltCSS, setUseAltCSS, showNav, setShowNav};
};
export default useScrollEventListener;
