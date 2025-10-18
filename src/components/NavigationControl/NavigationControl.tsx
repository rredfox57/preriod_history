import { FC } from 'react';

import { ArrowIcon } from '@/assets/ArrowIcon';
import { UseNavigationControlReturn } from '@/hooks/useNavigationControl';

import { Button, ButtonWrapper, NavigationFraction, Wrapper } from './NavigationControl.styles';

interface Props {
  currentPage: UseNavigationControlReturn['currentPage'];
  total: UseNavigationControlReturn['total'];
  changeActivePage: UseNavigationControlReturn['changeActivePage'];
}

const NavigationControl: FC<Props> = ({ currentPage, total, changeActivePage }) => {
  const page = currentPage + 1;

  const handleClickNext = () => {
    changeActivePage(currentPage + 1);
  };

  const handleClickBack = () => {
    changeActivePage(currentPage - 1);
  };

  return (
    <Wrapper>
      <NavigationFraction>{`${page} / ${total}`}</NavigationFraction>
      <ButtonWrapper>
        <Button pos="left" disabled={!currentPage} onClick={handleClickBack}>
          <ArrowIcon />
        </Button>
        <Button pos="right" disabled={total === page} onClick={handleClickNext}>
          <ArrowIcon />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default NavigationControl;
