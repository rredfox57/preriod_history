import { MOBILE_SIZE, TABLE_SIZE } from '@/consts';

import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    blackBlue: '#42567A',
    blackBlue20: '#42567A20',
    blackBlue50: '#42567A50',
    blue: '#3877EE',
    blue10: '#3877EE10',
    background: '#f4f5f9ff',
    pink: '#EF5DA8',
    violet: '#5D5FEF',
    white: '#FFFFFF',
    borderGray: '#c7cdd9',
  },
  spacing: {
    small: '16px',
    medium: '64px',
    large: '128px',
  },
  media: {
    mobile: `@container (width < ${MOBILE_SIZE}px)`,
    tablet: `@container (width < ${TABLE_SIZE}px)`,
  },
  typography: {
    headerLarge: {
      fontSize: '56px',
      fontWeight: 'bold',
      lineHeight: '64px',
    },
    headerMedium: {
      fontSize: '28px',
      fontWeight: 'bold',
      lineHeight: '32px',
    },
    titleLargeBN: {
      fontSize: '25px',
      fontWeight: 'normal',
      lineHeight: '32px',
      fontFamily: "'Bebas Neue', sans-serif",
    },
    titleMediumBN: {
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '22px',
      fontFamily: "'Bebas Neue', sans-serif",
    },
    titleMedium: {
      fontSize: '20px',
      fontWeight: 'bold',
      lineHeight: '28px',
    },
    bodyLarge: {
      fontSize: '20px',
      fontWeight: 'normal',
      lineHeight: '28px',
    },
    bodyMedium: {
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '20px',
    },
    mainLarge: {
      fontSize: '200px',
      fontWeight: 'bold',
      lineHeight: '240px',
    },
    mainMedium: {
      fontSize: '100px',
      fontWeight: 'bold',
      lineHeight: '120px',
    },
    mainSmall: {
      fontSize: '56px',
      fontWeight: 'bold',
      lineHeight: '64px',
    },
  },
};
