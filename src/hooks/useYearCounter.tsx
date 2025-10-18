import gsap from 'gsap';
import { RefObject, useEffect, useState } from 'react';

import { animationDuration } from '@/consts';

interface UseYearCounterParams {
  ref: RefObject<HTMLDivElement | null>;
  year: number;
}

export const useYearCounter = ({ ref, year }: UseYearCounterParams) => {
  const [currentYear, setCurrentYear] = useState(year);

  useEffect(() => {
    let current = currentYear;
    const el = ref.current;

    if (el) {
      el.textContent = String(current);

      const stepCount = Math.abs(year - currentYear);
      const stepTime = animationDuration / stepCount;

      const tl = gsap.timeline({
        repeat: stepCount,
        onRepeat: () => {
          if (currentYear < year) {
            current++;
          } else {
            current--;
          }

          el.textContent = String(current);
        },
        onComplete: () => {
          el.textContent = String(current);
          setCurrentYear(current);
        },
      });

      tl.to({}, { duration: stepTime });
    }
  }, [ref, year]);
};
