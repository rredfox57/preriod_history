import 'styled-components';

interface Theme {
  colors: {
    blackBlue: string;
    blackBlue20: string;
    blackBlue50: string;
    blue: string;
    blue10: string;
    background: string;
    pink: string;
    violet: string;
    white: string;
    borderGray: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  media: {
    mobile: string;
    tablet: string;
  };
  typography: Typography;
}

interface Typography {
  headerLarge: FontStyle;
  headerMedium: FontStyle;
  titleLargeBN: FontStyle;
  titleMediumBN: FontStyle;
  titleMedium: FontStyle;
  bodyLarge: FontStyle;
  bodyMedium: FontStyle;
  mainLarge: FontStyle;
  mainMedium: FontStyle;
  mainSmall: FontStyle;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
