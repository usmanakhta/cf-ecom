import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import toys from "../../assets/Home Images/toys.png";
import toys2 from "../../assets/Home Images/toys2.png";
import toys3 from "../../assets/Home Images/toys3.png";
import toys4 from "../../assets/Home Images/toys4.png";
import toys5 from "../../assets/Home Images/toys5.png";
import toys6 from "../../assets/Home Images/toys6.png";

function Slider3() {
  const slidesData = [
    { id: 1, imgSrc: toys, label: "Toys" },
    { id: 2, imgSrc: toys2, label: "Games" },
    { id: 3, imgSrc: toys3, label: "Books" },
    { id: 4, imgSrc: toys4, label: "Clothes" },
    { id: 5, imgSrc: toys5, label: "Shoes" },
    { id: 6, imgSrc: toys6, label: "Accessories" },
    { id: 7, imgSrc: toys, label: "Gadgets" },
    { id: 8, imgSrc: toys2, label: "Electronics" },
    { id: 9, imgSrc: toys3, label: "Furniture" },
  ];

  const handleSlideChange = (swiper) => {
    console.log("Current active slide index:", swiper.activeIndex);
    console.log("Current slide label:", slidesData[swiper.activeIndex].label);
  };

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      navigation
      modules={[Navigation]}
      className="w-[97%]"
      onSlideChange={handleSlideChange}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
    >
      {slidesData.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="h-[35vh] bg-white rounded-md flex justify-center items-center shadow-2xl border-2 group"
        >
          <div className="text-center">
            <img
              src={slide.imgSrc}
              alt={slide.label}
              className="h-[20vh] mx-auto transition-transform duration-300 group-hover:scale-110"
            />
            <p className="bg-[#cecece] cursor-pointer w-auto text-center mx-auto rounded-lg py-1 font-medium mt-10 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
              {slide.label}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider3;
