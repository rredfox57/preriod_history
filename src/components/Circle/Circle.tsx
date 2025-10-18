import { FC, useEffect, useRef } from 'react';

import { radiusCircle } from '@/consts';
import useDotsAnimation from '@/hooks/useDotsAnimation';
import { UseNavigationControlReturn } from '@/hooks/useNavigationControl';

import { CircleContainer, Dot, DotNumber, Title } from './Circle.styles';
import { getDotPosition } from './utils';

interface Props {
  isEventsClick: UseNavigationControlReturn['isEventsClick'];
  totalDots: UseNavigationControlReturn['total'];
  currentPage: UseNavigationControlReturn['currentPage'];
  titlePeriods: UseNavigationControlReturn['titlePeriods'];
  changeActivePage: UseNavigationControlReturn['changeActivePage'];

  radius?: number;
}

const Circle: FC<Props> = ({
  currentPage,
  totalDots,
  radius = radiusCircle,
  isEventsClick,
  titlePeriods,
  changeActivePage,
}) => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const rotationRef = useRef(0);
  const activeIndexRef = useRef(currentPage);

  const hoverRef = useRef<(gsap.core.Tween | null)[]>(Array.from({ length: totalDots }));

  const { animationDots, startAnimation } = useDotsAnimation({
    hoverRef,
    circleRef,
    dotRefs,
    rotationRef,
    activeIndexRef,
    totalDots,
    isEventsClick,
    titleRefs,
  });

  const handleClick = (idx: number) => {
    changeActivePage(idx, { isClick: true });
  };

  const handleMouseEnter = (idx: number, target: EventTarget | null) => {
    if (idx !== activeIndexRef.current && target && !hoverRef.current[idx]?.isActive()) {
      animationDots(idx, target);
    }
  };

  const handleMouseLeave = (idx: number, target: EventTarget | null) => {
    if (idx !== activeIndexRef.current && target && hoverRef.current[idx]) {
      hoverRef.current[idx]?.reverse();
    }
  };

  useEffect(() => {
    startAnimation(currentPage);
  }, [currentPage, startAnimation]);

  return (
    <CircleContainer ref={circleRef} size={radius * 2 || 0}>
      {Array.from({ length: totalDots }).map((_, idx) => {
        const point = getDotPosition(idx, totalDots, radius);

        const title = titlePeriods[idx];

        return (
          <Dot
            ref={(el) => {
              dotRefs.current[idx] = el;
            }}
            key={idx}
            style={{
              left: point.x,
              top: point.y,
            }}
            onMouseOver={(e) => handleMouseEnter(idx, e.target)}
            onMouseOut={(e) => handleMouseLeave(idx, e.target)}
            onClick={() => handleClick(idx)}
          >
            <>
              <DotNumber>{point.index}</DotNumber>
              <Title
                ref={(el) => {
                  titleRefs.current[idx] = el;
                }}
              >
                {title}
              </Title>
            </>
          </Dot>
        );
      })}
    </CircleContainer>
  );
};

export default Circle;
