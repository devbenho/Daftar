// TODO HAMDY
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import teachers from '../data/teachers.json'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CardTeachers } from "./CardTeachers";

export default function PopularTeachers(props) {
  return (
    <>
      <div className="w-[1400px] h-[700px] bg-brand-500 rounded my-16 pt-6 mx-auto px-6">
        <h1 className="font-bold text-[32px] text-brand-50">
          Popular Teachers
        </h1>

        {/* Fillter Start*/}
        <div className="flex gap-4 justify-end items-end w-full pt-4">
          <button className="bg-[#E9F7FA] px-6 py-[8px] text-[#186B7A] rounded-[6px]">
            Arabic
          </button>
          <button className="bg-[#E9F7FA] px-6 py-[8px] text-[#186B7A] rounded-[6px]">
            Math
          </button>
          <button className="bg-[#E9F7FA] px-6 py-[8px] text-[#186B7A] rounded-[6px]">
            English
          </button>
          <button className="bg-[#E9F7FA] px-6 py-[8px] text-[#186B7A] rounded-[6px]">
            Chemistry
          </button>
          <button className="bg-[#E9F7FA] px-6 py-[8px] text-[#186B7A] rounded-[6px]">
            Physics
          </button>
          <button className="bg-[#E9F7FA] px-6 py-[8px] text-[#186B7A] rounded-[6px]">
            ALL
          </button>
        </div>
        {/* Fillter End*/}

        <div className=" flex justify-center items-center">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={200}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/model-teacher.png")}
                teacherName="Muhammad Banhawy"
                subjectName="لغة عربية"
                rating="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/motaz.jpg")}
                teacherName="Motaz Essam"
                subjectName="Physics"
                rating="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/reem.jpg")}
                teacherName="Reem El-Eraqi"
                subjectName="English"
                rating="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/bassil.jpg")}
                teacherName="Bassil Haroun"
                subjectName="Chemistry"
                rating="4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/hamdy_pic.jpg")}
                teacherName="Muhammad Hamdy"
                subjectName="Biology"
                rating="3"
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/model-teacher.png")}
                teacherName="Muhammad Banhawy"
                subjectName="لغة عربية"
                rating="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/motaz.jpg")}
                teacherName="Motaz Essam"
                subjectName="Physics"
                rating="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/reem.jpg")}
                teacherName="Reem El-Eraqi"
                subjectName="English"
                rating="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/bassil.jpg")}
                teacherName="Bassil Haroun"
                subjectName="Chemistry"
                rating="4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeachers
                img={require("../assets/hamdy_pic.jpg")}
                teacherName="Muhammad Hamdy"
                subjectName="Biology"
                rating="3"
              />
            </SwiperSlide>

             {/* filter start */}
          {/* {teachers.data
            .filter((teacher) => teacher.subject)
            .map((teacher) => {
              <SwiperSlide>
                <CardTeachers
                  img={require(teacher.Photo)}
                  teacherName={teacher.teacherName}
                  subjectName={teacher.SubjectName}
                  rating={teacher.rating}
                />
              </SwiperSlide>
              console.log(teacher)
            })} */}

             {/* filter end */}

          </Swiper>
        </div>
      </div>
    </>
  );
}
