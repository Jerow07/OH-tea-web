import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

import { Slidable } from '../../components/Slidable'

export const Galeria = () => {

  return (
    <section style={{ height: '80vh' }}>
      <Swiper loop={true} navigation={true} autoplay={{
        "delay": 2000,
        "disableOnInteraction": false
      }} style={{ height: '80vh' }}>
        <SwiperSlide>
          <Slidable imageUrl="/slider/webp/slide1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Slidable imageUrl="/slider/webp/slide2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Slidable imageUrl="/slider/webp/slide3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Slidable imageUrl="/slider/webp/slide4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Slidable imageUrl="/slider/webp/slide5.webp" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}