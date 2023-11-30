import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BannerData from "../mockdata/BannerData";

export default function Corousel() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {BannerData.map((pic) => {
          return (
            <SwiperSlide>
              <img src={pic.pictureSource} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
