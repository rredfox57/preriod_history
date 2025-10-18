import gsap from 'gsap';
import { useCallback } from 'react';

import { useMatchMedia } from './useMatchMedia';

interface UseSwiperAnimationReturn {
  startAnimation: (wrapper: HTMLDivElement, callback: () => void) => Promise<void>;
}

const useSwiperAnimation = (): UseSwiperAnimationReturn => {
  const { isMobile } = useMatchMedia();

  const startAnimation = useCallback(
    async (wrapper: HTMLDivElement, callback: () => void) => {
      await gsap.to(wrapper, {
        duration: 0.4,
        opacity: 0,
      });

      callback();

      await gsap.to(wrapper, {
        duration: 0.6,
        delay: 0.4,
        opacity: 1,
        keyframes: isMobile
          ? [
              { y: 20, duration: 0.2, opacity: 0 },
              { y: 10, duration: 0.2, opacity: 0.5 },
              { y: 0, duration: 0.2, opacity: 1 },
            ]
          : undefined,
      });
    },
    [isMobile],
  );

  return { startAnimation };
};

export default useSwiperAnimation;
