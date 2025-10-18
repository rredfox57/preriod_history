import { useEffect, useState } from 'react';

interface SizeWindow {
  width: number | undefined;
  height: number | undefined;
}

const useResizeWindow = (): SizeWindow => {
  const [sizeWindow, setWindowSize] = useState<SizeWindow>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return sizeWindow;
};

export default useResizeWindow;
