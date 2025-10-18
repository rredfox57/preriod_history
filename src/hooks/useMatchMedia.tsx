import { useEffect, useState } from 'react';

import { MEDIA_MOBILE } from '@/consts';

export const useMatchMedia = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia(MEDIA_MOBILE);

    const handleChange = () => {
      setIsMobile(mobileQuery.matches);
    };

    handleChange();

    mobileQuery.addEventListener('change', handleChange);

    return () => {
      mobileQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return { isMobile };
};
