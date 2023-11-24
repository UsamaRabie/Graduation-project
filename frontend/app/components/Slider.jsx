"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CardDefault } from "./Card";
const Slider = () => {
  return (
    <Swiper
    navigation={{ clickable: true }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={3}

      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 1,
        },
        900:{
          slidesPerView:2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
          <div>
          <SwiperSlide><CardDefault/></SwiperSlide>
          <SwiperSlide><CardDefault/></SwiperSlide>
          <SwiperSlide><CardDefault/></SwiperSlide>
          <SwiperSlide><CardDefault/></SwiperSlide>
          </div>
    </Swiper>
  );
};

export default Slider;