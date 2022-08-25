// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="img/gallery_03.png" alt="갤러리 이미지" height={337} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/clip2.gif" alt="갤러리 이미지" width={600} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/gallery_04.jpg" alt="갤러리 이미지" width={600} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/clip.gif" alt="갤러리 이미지" width={600} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/gallery_05.jpg" alt="갤러리 이미지" width={600} />
      </SwiperSlide>
    </Swiper>
  );
};
