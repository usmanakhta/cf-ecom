import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import shirt1 from "../../assets/Home Images/shirt1.png"; 
import StarIcon from "@mui/icons-material/Star";
import shirt2 from "../../assets/Home Images/shirt2.png"; 
import shirt3 from "../../assets/Home Images/shirt3.png"; 
import shirt4 from "../../assets/Home Images/shirt4.png"; 
import shirt5 from "../../assets/Home Images/shirt5.png"; 

function Slider4() {
  const slidesData = [
    {
      id: 1,
      image: shirt1,
      title: "Silver High Neck Sweater",
      price: "$210.00",
      rating: 5,
      reviews: 0,
    },
    {
      id: 2,
      image: shirt2,
      title: "Blue Casual Shirt",
      price: "$150.00",
      rating: 4,
      reviews: 12,
    },
    {
      id: 3,
      image: shirt3,
      title: "Red Hoodie",
      price: "$130.00",
      rating: 4,
      reviews: 9,
    },
    {
      id: 4,
      image: shirt4, 
      title: "Red Hoodie",
      price: "$130.00",
      rating: 4,
      reviews: 9,
    },
    {
      id: 5,
      image: shirt5,
      title: "Red Hoodie",
      price: "$130.00",
      rating: 4,
      reviews: 9,
    },
    {
      id: 6,
      image: shirt1,
      title: "Red Hoodie",
      price: "$130.00",
      rating: 4,
      reviews: 9,
    },
    {
      id: 7,
      image: shirt2, 
      title: "Red Hoodie",
      price: "$130.00",
      rating: 4,
      reviews: 9,
    },
  ];

  const handleSlideChange = (swiper) => {
    console.log("Current active slide index:", swiper.activeIndex);
    console.log("Current slide label:", slidesData[swiper.activeIndex].title);
  };

  return (
    <>
      <div className="flex justify-between w-[97%] mx-auto">
        <p className="text-gray-700 text-xl font-medium">Deals Of The Days</p>
        <p className="text-lg font-medium text-gray-700 cursor-pointer">
          Shop Now <NavigateNextIcon />
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
        className="w-[97%] py-5"
        onSlideChange={handleSlideChange}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {slidesData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="h-[60vh] bg-white rounded-md group flex flex-col justify-center items-center hover:border hover:border-black transition-all ease-in-out duration-100 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[35vh] transition-transform duration-300 group-hover:scale-110"
            />
            <p className="font-medium text-gray-600">{item.title}</p>
            <p className="text-gray-600">{item.price}</p>
            <div className="flex text-gray-600">
              <div className="text-gray-600">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <StarIcon key={index} className="text-[20px]" />
                ))}
              </div>
              <p>({item.reviews})</p>
            </div>
            <button className="border border-black w-[150px] my-2 py-1 rounded-lg font-medium hover:bg-slate-300">
              Add to Cart
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider4;
