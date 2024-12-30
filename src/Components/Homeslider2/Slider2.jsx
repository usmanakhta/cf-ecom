import React from "react";
import comp from "../../assets/Home Images/comp1.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

function Slider2() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[27vh] w-[100%] md:h-[70vh]"
      >
        <SwiperSlide>
          <div className="h-auto md:h-[33vh] w-full bg-[#e1d2d2] rounded-md p-3 md:p-2">
            <p className="text-sm md:text-base">NEW ARRIVALS</p>
            <p className="text-lg md:text-xl font-semibold">SUMMER</p>
            <p className="text-sm md:text-lg font-medium text-gray-600">
              SALE 20% OFF
            </p>
            <div className="flex items-end justify-between mt-3">
              <p className="cursor-pointer text-gray-500 text-sm md:text-lg font-medium flex items-center">
                Shop Now <NavigateNextIcon className="text-base md:text-lg" />
              </p>
              <img
                src={comp}
                alt="New Arrivals"
                className="h-[12vh]  md:h-[17vh] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30vh] md:h-[33vh] w-full bg-[#e1d2d2] rounded-md p-3 md:p-2">
            <p className="text-sm md:text-base">NEW ARRIVALS</p>
            <p className="text-lg md:text-xl font-semibold">SUMMER</p>
            <p className="text-sm md:text-lg font-medium text-gray-600">
              SALE 20% OFF
            </p>
            <div className="flex items-end justify-between mt-3">
              <p className="cursor-pointer text-gray-500 text-sm md:text-lg font-medium flex items-center">
                Shop Now <NavigateNextIcon className="text-base md:text-lg" />
              </p>
              <img
                src={comp}
                alt="New Arrivals"
                className="h-[12vh] md:h-[17vh] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider2;
