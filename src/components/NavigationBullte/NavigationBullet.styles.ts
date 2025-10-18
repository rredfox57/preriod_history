import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  bottom: 40px;
  z-index: 10;

  display: none;

  ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`;

export const BulletList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Bullet = styled.span<{ isActive: boolean }>`
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blackBlue};

  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
`;
