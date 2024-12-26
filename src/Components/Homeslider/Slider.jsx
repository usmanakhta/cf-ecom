import React from "react";
import shoes from "../../assets/Home Images/shoes1.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[45vh] w-[100%] md:h-[70vh]"
      >
        <SwiperSlide>
          <div className="h-auto md:h-[33vh] w-full bg-[#dcdcdc] rounded-md p-3 md:p-2">
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div>
                <p className="text-sm md:text-base">NEW ARRIVALS</p>
                <p className="text-lg md:text-xl font-semibold">SUMMER</p>
                <p className="text-sm md:text-lg font-medium text-gray-600">
                  SALE 20% OFF
                </p>
              </div>
              <img
                src={shoes}
                alt="New Arrivals"
                className="h-[25vh] md:h-[25vh] object-contain"
              />
            </div>
            <p className="cursor-pointer text-gray-500 text-sm md:text-lg font-medium flex items-center mt-3">
              Shop Now <NavigateNextIcon className="text-base md:text-lg ml-1" />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto md:h-[33vh] w-full bg-[#dcdcdc] rounded-md p-3 md:p-2">
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div>
                <p className="text-sm md:text-base">NEW ARRIVALS</p>
                <p className="text-lg md:text-xl font-semibold">SUMMER</p>
                <p className="text-sm md:text-lg font-medium text-gray-600">
                  SALE 20% OFF
                </p>
              </div>
              <img
                src={shoes}
                alt="New Arrivals"
                className="h-[25vh] md:h-[25vh] object-contain"
              />
            </div>
            <p className="cursor-pointer text-gray-500 text-sm md:text-lg font-medium flex items-center mt-3">
              Shop Now <NavigateNextIcon className="text-base md:text-lg ml-1" />
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
