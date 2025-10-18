import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  min-height: 530px;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;

    height: 1px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.blackBlue20};

    transform: translate(0, -50%);
  }

  ${({ theme }) => theme.media.mobile} {
    flex-grow: inherit;

    min-height: 180px;
    &::after {
      display: none;
    }
  }
`;
