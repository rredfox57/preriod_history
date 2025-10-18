import { FC } from 'react';

import { useNavigationControl } from '@/hooks/useNavigationControl';

import Header from '../Header/Header';
import NavigationBullet from '../NavigationBullte/NavigationBullet';
import NavigationControl from '../NavigationControl/NavigationControl';
import PeriodBlock from '../PeriodBlock/PeriodBlock';
import SwiperEvent from '../SwiperEvent/SwiperEvent';

import { Layout, Main } from './HistoryPeriods.styles';

interface Props {}

const HistoryPeriods: FC<Props> = () => {
  const { currentPage, total, activePageData, isEventsClick, titlePeriods, changeActivePage } =
    useNavigationControl({});

  return (
    <Layout>
      <Main>
        <Header text="Исторические даты" />
        <PeriodBlock
          start={activePageData.startPeriod}
          end={activePageData.endPeriod}
          total={total}
          currentPage={currentPage}
          titlePeriods={titlePeriods}
          isEventsClick={isEventsClick}
          changeActivePage={changeActivePage}
        />
        <NavigationControl
          total={total}
          currentPage={currentPage}
          changeActivePage={changeActivePage}
        />

        <SwiperEvent events={activePageData.events} title={activePageData.title} />
        <NavigationBullet
          total={total}
          currentPage={currentPage}
          changeActivePage={changeActivePage}
        />
      </Main>
    </Layout>
  );
};

export default HistoryPeriods;
