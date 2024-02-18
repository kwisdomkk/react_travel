import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import DetailLayout from './DetailLayout';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><DetailLayout/></SwiperSlide>
      
      
      ...
    </Swiper>
  );
};