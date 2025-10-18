import { FC, memo } from 'react';

import { HeaderTitle, HeaderWrapper } from './Header.styles';

interface Props {
  text: string;
}

const Header: FC<Props> = ({ text }) => (
  <HeaderWrapper>
    <HeaderTitle>{text}</HeaderTitle>
  </HeaderWrapper>
);

export default memo(Header);
