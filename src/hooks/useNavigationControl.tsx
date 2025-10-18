import { useCallback, useEffect, useMemo, useState } from 'react';

import mock from '../../mocks/historyPeriods.json';

interface PageData {
  id: number;
  title: string;
  idxPeriod: string;
  events: Events[];
  startPeriod: number;
  endPeriod: number;
}

export interface Events {
  title: string;
  description: string;
  id: number;
}

interface Options {
  isClick: boolean;
}

interface UseNavigationControlParams {}

export interface UseNavigationControlReturn {
  activePageData: PageData;
  changeActivePage: (idx: number, options?: Options) => void;
  currentPage: number;
  total: number;
  isEventsClick: boolean;
  titlePeriods: string[];
}

export const useNavigationControl =
  ({}: UseNavigationControlParams): UseNavigationControlReturn => {
    const [currentPage, setCurrentPage] = useState(0);
    const [activePageData, setActivePageData] = useState<PageData>(mock.periods[0]);
    const titlePeriods = useMemo(() => mock.periods.map(({ title }) => title || ''), []);
    const [isEventsClick, setIsEventClick] = useState(false);

    const changeActivePage = useCallback((idx: number, options?: Options) => {
      setIsEventClick(false);
      setCurrentPage(idx);
      setIsEventClick(!!options?.isClick);
    }, []);

    useEffect(() => {
      const newPeriod = mock.periods[currentPage];
      setActivePageData(newPeriod);
    }, [currentPage]);

    return {
      activePageData,
      changeActivePage,
      currentPage,
      total: mock.periods.length || 0,
      isEventsClick,
      titlePeriods,
    };
  };
