import styled from 'styled-components';

import { typographyMixin } from '@/styles/mixins';

export const CircleContainer = styled.div<{ size: number }>`
  margin: 0 auto;

  position: absolute;
  top: 0px;
  left: 50%;
  z-index: 10;

  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  border: 1px solid ${({ theme }) => theme.colors.blackBlue20};
  border-radius: 50%;

  transform: translate(-50%, 0);

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const Dot = styled.div<{ isActive?: boolean; isHover?: boolean }>`
  position: absolute;

  width: 6px;
  height: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.blackBlue};
  color: ${({ theme }) => theme.colors.blackBlue};
  border: 1px solid ${({ theme }) => theme.colors.blackBlue20};
  border-radius: 50%;

  font-size: 0px;

  cursor: pointer;

  transform: translate(-50%, -50%);
`;

export const DotNumber = styled.span`
  pointer-events: none;
`;

export const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 64px;

  display: flex;

  ${({ theme }) => typographyMixin(theme.typography.titleMedium)};

  opacity: 0;
  transform: translate(0, -50%);

  pointer-events: none;
`;
