import React from 'react';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import women from '../../assets/Home Images/women.png';

function Cards2() {
  
  const slidesData = [
    {
      title: "NEW ARRIVALS",
      subtitle: "SKI CLOTHES SALE",
      description: "SALE 20% OFF",
      buttonText: "Shop Now",
      image: women,
    },
    {
      title: "WINTER DEALS",
      subtitle: "WOMEN'S JACKETS",
      description: "DISCOUNTS UP TO 25%",
      buttonText: "Explore",
      image: women,
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
            <div className="h-auto py-5 md:h-[30vh] w-full bg-[#2e2c33] text-white rounded-md p-3 md:p-2 md:px-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm md:text-sm">{slide.title}</p>
                  <p className="text-lg md:text-xl">{slide.subtitle}</p>
                  <p className="text-sm md:text-sm font-medium text-white">
                    {slide.description}
                  </p>
                  <p className="cursor-pointer text-white text-sm md:text-lg md:my-4 font-medium flex items-center">
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

export default Cards2;
