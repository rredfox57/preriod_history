import { FC } from 'react';

import { UseNavigationControlReturn } from '@/hooks/useNavigationControl';

import Circle from '../Circle/Circle';
import YearPeriod from '../YearPeriod/YearPeriod';

import { Wrapper } from './PeriodBlock.styles';

interface Props {
  start: number;
  end: number;

  total: UseNavigationControlReturn['total'];
  currentPage: UseNavigationControlReturn['currentPage'];
  isEventsClick: UseNavigationControlReturn['isEventsClick'];
  titlePeriods: UseNavigationControlReturn['titlePeriods'];
  changeActivePage: UseNavigationControlReturn['changeActivePage'];
}

const PeriodBlock: FC<Props> = ({
  start,
  end,

  total,
  currentPage,
  isEventsClick,
  titlePeriods,
  changeActivePage,
}) => (
  <Wrapper>
    <YearPeriod start={start} end={end} />
    <Circle
      titlePeriods={titlePeriods}
      totalDots={total}
      currentPage={currentPage}
      isEventsClick={isEventsClick}
      changeActivePage={changeActivePage}
    />
  </Wrapper>
);

export default PeriodBlock;
