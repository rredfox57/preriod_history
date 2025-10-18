import styled from 'styled-components';

import { typographyMixin } from '@/styles/mixins';

export const PeriodWrapper = styled.div`
  margin 0px auto;

  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
  gap: 64px;
`;

const BasePeriod = styled.h3`
  ${({ theme }) => typographyMixin(theme.typography.mainLarge)};
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    ${({ theme }) => typographyMixin(theme.typography.mainMedium)};
  }

  ${({ theme }) => theme.media.mobile} {
    ${({ theme }) => typographyMixin(theme.typography.mainSmall)};
  }
`;

export const StartPeriod = styled(BasePeriod)`
  color: ${({ theme }) => theme.colors.violet};
`;

export const EndPeriod = styled(BasePeriod)`
  color: ${({ theme }) => theme.colors.pink};
`;
