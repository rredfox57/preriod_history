import styled from 'styled-components';

import { typographyMixin } from '@/styles/mixins';

export const HeaderWrapper = styled.div`
  padding-left: 80px;
  position: relative;
  top: 64px;

  display: flex;
  justify-content: start;
  width: 100%;

  border-left: 5px solid;
  border-image: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.colors.violet} 0%, ${theme.colors.pink} 100%)`};
  border-image-slice: 1;

  ${({ theme }) => theme.media.mobile} {
    padding: 0;
    margin-top: 60px;
    position: static;

    border: none;
  }
`;

export const HeaderTitle = styled.h1`
  max-width: 400px;

  ${({ theme }) => typographyMixin(theme.typography.headerLarge)};
  color: ${({ theme }) => theme.colors.blackBlue};
  word-wrap: break-word;

  ${({ theme }) => theme.media.mobile} {
    max-width: 180px;

    ${({ theme }) => typographyMixin(theme.typography.headerMedium)};
  }
`;
