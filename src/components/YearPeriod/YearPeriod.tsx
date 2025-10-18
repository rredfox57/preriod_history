import { FC, useRef } from 'react';

import { useYearCounter } from '@/hooks/useYearCounter';

import { EndPeriod, PeriodWrapper, StartPeriod } from './YearPeriod.styles';

interface Props {
  start: number;
  end: number;
}

const YearPeriod: FC<Props> = ({ start, end }) => {
  const yearStartRef = useRef<HTMLDivElement | null>(null);
  const yearEndRef = useRef<HTMLDivElement | null>(null);

  useYearCounter({ ref: yearStartRef, year: start });
  useYearCounter({ ref: yearEndRef, year: end });

  return (
    <PeriodWrapper>
      <StartPeriod ref={yearStartRef} />
      <EndPeriod ref={yearEndRef} />
    </PeriodWrapper>
  );
};

export default YearPeriod;
