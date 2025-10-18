import styled, { css } from 'styled-components';

import { typographyMixin } from '@/styles/mixins';

export const Wrapper = styled.div`
  padding-top: 24px;
  margin-top: auto;

  position: relative;

  width: 100%;
  min-height: 240px;

  ${({ theme }) => theme.media.mobile} {
    padding: 0px 0px 80px;
  }
`;

export const SwiperTitle = styled.div`
  display: none;

  ${({ theme }) => theme.media.mobile} {
    padding: 12px 0px;
    margin-bottom: 12px;

    width: 100%;

    display: block;

    ${({ theme }) => typographyMixin(theme.typography.titleMedium)};

    color: ${({ theme }) => theme.colors.blackBlue};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.borderGray}`};
  }
`;

export const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const SwiperContainer = styled.div`
  margin: 0 ${({ theme }) => theme.spacing.medium};

  display: flex;
  gap: 40px;

  ${({ theme }) => theme.media.mobile} {
    margin: 0;
  }

  && .swiper {
    margin: 0;
  }
`;

export const SlideCard = styled.div`
  margin-right: 64px;
  max-width: 400px;
  width: 100%;
  min-width: 166px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({ theme }) => theme.media.mobile} {
    margin-right: 8px;
    max-width: 166px;
  }
`;

export const TitleCard = styled.p`
  ${({ theme }) => typographyMixin(theme.typography.titleLargeBN)};
  color: ${({ theme }) => theme.colors.blue};

  ${({ theme }) => theme.media.mobile} {
    ${({ theme }) => typographyMixin(theme.typography.titleMediumBN)};
  }
`;

export const DescriptionCard = styled.span`
  ${({ theme }) => typographyMixin(theme.typography.bodyLarge)};
  color: ${({ theme }) => theme.colors.blackBlue};

  ${({ theme }) => theme.media.mobile} {
    ${({ theme }) => typographyMixin(theme.typography.bodyMedium)}
  }
`;

export const NavButton = styled.button<{ pos: 'left' | 'right'; isHidden: boolean }>`
  position: absolute;
  z-index: 10;
  top: 50%;
  ${({ pos }) => (pos === 'left' ? 'left: 10px' : 'right: 10px')};

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.blue10};

  transform: translateY(-50%) ${({ pos }) => (pos === 'left' ? 'rotate(0deg)' : 'rotate(-180deg)')};

  opacity: 1;
  ${({ isHidden }) =>
    isHidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}

  & path {
    stroke: ${({ theme }) => theme.colors.blue};
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
