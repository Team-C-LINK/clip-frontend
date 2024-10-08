'use client';

import { useState, useCallback, useEffect } from 'react';

const getWindowInnerHeight = () =>
  Number((window.innerHeight * 0.01).toFixed(2));
export function useVh(): number {
  const [vh, setVh] = useState<number>(0);

  const updateVh = useCallback(() => {
    const innerHeight = getWindowInnerHeight();

    document.documentElement.style.setProperty('--vh', `${innerHeight}px`);
    setVh(innerHeight);
  }, [setVh]);

  useEffect(() => {
    updateVh();
    window.addEventListener('resize', updateVh);

    return () => {
      window.removeEventListener('resize', updateVh);
    };
  }, [updateVh]);

  return vh;
}
