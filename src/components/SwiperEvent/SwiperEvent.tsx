import { FC, useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import { ArrowIcon } from '@/assets/ArrowIcon';
import { Events } from '@/hooks/useNavigationControl';
import useResizeWindow from '@/hooks/useResizeWindow';
import useSwiperAnimation from '@/hooks/useSwiperAnimation';

import {
  Content,
  DescriptionCard,
  NavButton,
  SlideCard,
  SwiperContainer,
  SwiperTitle,
  TitleCard,
  Wrapper,
} from './SwiperEvent.styles';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  title: string;
  events: Events[];
}

const SwiperEvent: FC<Props> = ({ title, events }) => {
  const swiperRef = useRef<SwiperClass>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const [data, setData] = useState<{
    title: string;
    events: Events[];
  }>({ events, title });

  const { width } = useResizeWindow();
  const { startAnimation } = useSwiperAnimation();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const callback = () => {
        swiperRef.current?.slideTo(0);
        setData({ title, events });
      };

      startAnimation(wrapper, callback);
    }
  }, [title, events, startAnimation]);

  useEffect(() => {
    const swiper = swiperRef.current;

    if (!swiper || !swiper.navigation) return;

    swiper.navigation.init();
    swiper.navigation.update();

    handleSlideChange(swiper);
  }, [data, width]);

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSwiper = (swiper: SwiperClass) => {
    swiperRef.current = swiper;
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Content>
        <SwiperTitle>{data.title}</SwiperTitle>
        <SwiperContainer>
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSlideChange={handleSlideChange}
            onSwiper={handleSwiper}
          >
            {!!data.events.length &&
              data.events.map(({ id, title, description }) => (
                <SwiperSlide key={id} style={{ width: 'auto' }}>
                  <SlideCard>
                    <TitleCard>{title}</TitleCard>
                    <DescriptionCard>{description}</DescriptionCard>
                  </SlideCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </SwiperContainer>
        <NavButton ref={nextRef} pos="right" isHidden={isEnd}>
          <ArrowIcon />
        </NavButton>

        <NavButton ref={prevRef} pos="left" isHidden={isBeginning}>
          <ArrowIcon />
        </NavButton>
      </Content>
    </Wrapper>
  );
};

export default SwiperEvent;
