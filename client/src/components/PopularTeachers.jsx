// TODO HAMDY

import { CardTeachers } from "./CardTeachers";
import { Swiper, Pagination, SwiperSlide } from "swiper";

export default function PopularTeachers(props) {
  return (
    <>
      <div className="w-[1100px] h-[650px] bg-brand-500 mx-auto rounded-md my-16 flex justify-center items-center">
        
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        {/*
          <SwiperSlide>
            <span>Hello</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Hello</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Hello</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Hello</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Hello</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Hello</span>
          </SwiperSlide>
         */}
        </Swiper>

      </div>

    </>
  );
}
