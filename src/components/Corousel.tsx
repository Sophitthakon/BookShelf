// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import BannerData from "../mockdata/BannerData";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-1/4 w-full"
      >
        {BannerData.map((banner) => {
          return (
            <SwiperSlide className={`w-5/12`}>
              <img src={banner.pictureSource} alt="something" width={"full"} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
