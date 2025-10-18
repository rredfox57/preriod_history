import { css } from 'styled-components';

export interface FontStyle {
  fontSize: string;
  fontWeight: number | string;
  lineHeight: string;
  fontFamily: string;
}

export const typographyMixin = (style: FontStyle) => css`
  font-size: ${style.fontSize};
  font-weight: ${style.fontWeight};
  line-height: ${style.lineHeight};
  font-family: ${style.fontFamily};
`;
