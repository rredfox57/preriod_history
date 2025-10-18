import styled from 'styled-components';

export const Layout = styled.div`
  container-type: inline-size;
`;

export const Main = styled.div`
  margin: 0px ${({ theme }) => theme.spacing.large};

  position: relative;

  display: flex;
  flex-direction: column;

  min-height: 100vh;

  border-left: 1px solid ${({ theme }) => theme.colors.blackBlue20};
  border-right: 1px solid ${({ theme }) => theme.colors.blackBlue20};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;

    height: 100%;
    width: 1px;

    background-color: ${({ theme }) => theme.colors.blackBlue20};

    transform: translate(-50%, 0);
  }

  ${({ theme }) => theme.media.mobile} {
    margin: 0 ${({ theme }) => theme.spacing.small};
    border: none;

    &::after {
      display: none;
    }
  }
`;
