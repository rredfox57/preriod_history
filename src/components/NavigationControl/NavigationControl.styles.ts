import styled from 'styled-components';

import { typographyMixin } from '@/styles/mixins';

export const Wrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing.medium};

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;

  ${({ theme }) => theme.media.mobile} {
    margin-left: 0px;

    position: absolute;
    bottom: ${({ theme }) => theme.spacing.small};
    z-index: 10;
  }
`;

export const NavigationFraction = styled.div`
  ${({ theme }) => typographyMixin(theme.typography.bodyMedium)};
  color: ${({ theme }) => theme.colors.blackBlue};
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  gap: 12px;

  ${({ theme }) => theme.media.mobile} {
    gap: 8px;
  }
`;

export const Button = styled.button<{ disabled?: boolean; pos: 'left' | 'right' }>`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.blackBlue50};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
  transform: ${({ pos }) => (pos === 'left' ? 'rotate(0deg)' : 'rotate(-180deg)')};
  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  ${({ theme }) => theme.media.mobile} {
    width: 25px;
    height: 25px;

    & svg {
      width: 3px;
      height: 6px;
    }
  }
`;
