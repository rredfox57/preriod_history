import { radiusCircle } from '@/consts';

export const getDotPosition = (idx: number, total: number, radius: number = radiusCircle) => {
  const angleOffset = -Math.PI / 3;
  const angle = (idx / total) * Math.PI * 2 + angleOffset;
  const x = Math.cos(angle) * radius + radius;
  const y = Math.sin(angle) * radius + radius;

  return {
    index: idx + 1,
    x,
    y,
  };
};
