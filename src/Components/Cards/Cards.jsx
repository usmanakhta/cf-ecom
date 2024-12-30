import React from "react";
import cloth from "../../assets/Home Images/cloth.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";

function Cards() {
  const slidesData = [
    {
      title: "NEW ARRIVALS",
      subtitle: "SKI CLOTHES SALE",
      description: "SALE 20% OFF",
      buttonText: "Shop Now",
      image: cloth,
    },
    {
      title: "WINTER COLLECTION",
      subtitle: "SNOW JACKETS",
      description: "UP TO 30% OFF",
      buttonText: "Explore",
      image: cloth,
    },
  ];

  return (
    <div className="flex flex-wrap w-[97%] mx-auto justify-between gap-4 mb-7">
      <div className="h-auto md:h-[27vh] w-full sm:w-[48%] md:w-[32%]">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-auto py-5 md:h-[30vh] w-full bg-[#f1f1f1] border rounded-md p-3 md:p-2 md:px-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm md:text-sm">{slide.title}</p>
                    <p className="text-lg md:text-xl">{slide.subtitle}</p>
                    <p className="text-sm md:text-sm font-medium text-[#e6546d]">
                      {slide.description}
                    </p>
                    <p className="cursor-pointer text-gray-500 text-sm md:text-lg md:my-4 font-medium flex items-center">
                      {slide.buttonText}{" "}
                      <NavigateNextIcon className="text-base md:text-lg" />
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
      </div>

      <div className="h-auto md:h-[27vh] w-full sm:w-[48%] md:w-[32%]">
        <Cards2 />
      </div>
      <div className="h-auto md:h-[27vh] w-full sm:w-[48%] md:w-[32%]">
        <Cards3 />
      </div>
    </div>
  );
}

export default Cards;
