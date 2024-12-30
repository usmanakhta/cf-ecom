import React from 'react';
import bag from '../../assets/Home Images/bag.png';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

function Cards3() {

  const slidesData = [
    {
      title: "NEW ARRIVALS",
      subtitle: "SKI CLOTHES SALE",
      description: "SALE 20% OFF",
      buttonText: "Shop Now",
      image: bag,
      backgroundColor: "#e1d2d2",
      textColor: "gray-900",
    },
    {
      title: "BACKPACK SALE",
      subtitle: "TRAVEL ESSENTIALS",
      description: "DISCOUNT UP TO 30%",
      buttonText: "Explore",
      image: bag,
      backgroundColor: "#e1d2d2",
      textColor: "gray-900",
    },
    
  ];

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        
      >
        
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-auto py-5 md:h-[30vh] w-full border rounded-md p-3 md:p-2 md:px-3`}
              style={{ backgroundColor: slide.backgroundColor }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm md:text-sm">{slide.title}</p>
                  <p className="text-lg md:text-xl">{slide.subtitle}</p>
                  <p className={`text-sm md:text-sm font-medium text-${slide.textColor}`}>
                    {slide.description}
                  </p>
                  <p className="cursor-pointer text-gray-500 text-sm md:text-lg md:my-4 font-medium flex items-center">
                    {slide.buttonText} <NavigateNextIcon className="text-base md:text-lg" />
                  </p>
                </div>
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className="h-[12vh] md:h-[25vh] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Cards3;
