import gsap from 'gsap';
import { RefObject, useCallback, useRef } from 'react';

import { animationDuration } from '@/consts';
import { theme } from '@/styles/theme';

interface UseDotsAnimationParams {
  hoverRef: RefObject<(gsap.core.Tween | null)[]>;
  circleRef: RefObject<HTMLDivElement | null>;
  dotRefs: RefObject<(HTMLDivElement | null)[]>;
  titleRefs: RefObject<(HTMLSpanElement | null)[]>;
  rotationRef: RefObject<number>;
  activeIndexRef: RefObject<number>;
  totalDots: number;
  isEventsClick: boolean;
}

interface UseDotsAnimationReturn {
  animationDots: (idx: number, target: EventTarget | null, runBackwards?: boolean) => void;
  startAnimation: (idx: number) => void;
}

const useDotsAnimation = ({
  hoverRef,
  circleRef,
  dotRefs,
  rotationRef,
  activeIndexRef,
  totalDots,
  isEventsClick,
  titleRefs,
}: UseDotsAnimationParams): UseDotsAnimationReturn => {
  const activeTitleRef = useRef<gsap.core.Tween | null>(null);

  const animationTitle = (target: EventTarget | null) => {
    activeTitleRef.current = gsap.fromTo(
      target,
      {
        duration: 0.3,
        opacity: 0,
      },
      {
        delay: 1,
        duration: 0.5,
        opacity: 1,
      },
    );
  };

  const animationDots = useCallback(
    (idx: number, target: EventTarget | null, runBackwards?: boolean) => {
      hoverRef.current[idx] = gsap.fromTo(
        target,
        {
          width: 6,
          height: 6,
          fontSize: 0,
          backgroundColor: theme.colors.blackBlue,
          duration: animationDuration,
        },
        {
          width: 56,
          height: 56,
          fontSize: 32,
          backgroundColor: theme.colors.background,
          duration: animationDuration,
          runBackwards,
        },
      );
    },
    [hoverRef],
  );

  const startAnimation = useCallback(
    (idx: number) => {
      const prevDot = dotRefs.current[activeIndexRef.current];
      const nextDot = dotRefs.current[idx];
      const nextTitle = titleRefs.current[idx];

      if (prevDot && nextDot) {
        animationDots(activeIndexRef.current, prevDot, true);

        activeIndexRef.current = idx;

        if (!isEventsClick) {
          animationDots(activeIndexRef.current, nextDot);
        }

        if (activeTitleRef.current) {
          activeTitleRef.current.revert();
        }

        animationTitle(nextTitle);
      }

      const currentRotation = rotationRef.current;
      const targetAngle = -((idx / totalDots) * 360);
      let delta = targetAngle - currentRotation;

      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;

      const finalRotation = currentRotation + delta;

      dotRefs.current.forEach((el) => {
        if (el) {
          gsap.to(el, {
            rotation: -finalRotation,
            duration: 1,
          });
        }
      });

      gsap.to(circleRef.current, {
        rotation: finalRotation,
        duration: 1,
        transformOrigin: '50% 50%',
        onComplete: () => {
          rotationRef.current = finalRotation;
        },
      });
    },
    [
      circleRef,
      dotRefs,
      rotationRef,
      activeIndexRef,
      totalDots,
      isEventsClick,
      titleRefs,
      animationDots,
    ],
  );

  return { animationDots, startAnimation };
};

export default useDotsAnimation;
