import { FC } from 'react';

import { UseNavigationControlReturn } from '@/hooks/useNavigationControl';

import { Bullet, BulletList, Wrapper } from './NavigationBullet.styles';

interface Props {
  currentPage: UseNavigationControlReturn['currentPage'];
  total: UseNavigationControlReturn['total'];
  changeActivePage: UseNavigationControlReturn['changeActivePage'];
}

const NavigationBullet: FC<Props> = ({ currentPage, total, changeActivePage }) => (
  <Wrapper>
    <BulletList>
      {Array.from({ length: total }).map((_, idx) => (
        <Bullet isActive={currentPage === idx} onClick={() => changeActivePage(idx)} key={idx} />
      ))}
    </BulletList>
  </Wrapper>
);

export default NavigationBullet;
