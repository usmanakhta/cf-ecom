import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Home/Style.css";
import { Pagination } from "swiper/modules";
import home1 from "../../assets/Home Images/home1.png";
import Slider from "../Homeslider/Slider";
import Slider2 from "../Homeslider2/Slider2";
import Slider3 from "../Homeslider3/Slider3";
import Slider4 from "../Homeslider4/Slider4";

function Home() {
  return (
    <>
      <div className="bg-[#ececec]">
        <div className="flex flex-col lg:flex-row justify-around py-5">
          {/* Main Swiper Section */}
          <div className="w-full lg:w-[60%]">
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper h-[70vh] w-[100%]"
            >
              <SwiperSlide>
                <div className="bg-gradient-to-r from-[#f7e9ea] to-[#e0e0e0] h-[80vh] lg:h-[80vh] w-full text-[#404040] rounded-md">
                  <div className="flex flex-col lg:flex-row justify-around items-center h-full p-5">
                    {/* Text Content */}
                    <div className="flex flex-col gap-5 mt-5 lg:mt-12 text-center lg:text-left">
                      <p className="text-xl lg:text-3xl">
                        LIFESTYLE COLLECTION
                      </p>
                      <p className="text-2xl lg:text-5xl font-bold">MEN</p>
                      <div>
                        <p className="text-lg lg:text-2xl font-medium">
                          SALE UP TO{" "}
                          <span className="text-[#eb7c7b]">30% OFF</span>
                        </p>
                        <p className="text-sm lg:text-base">
                          Get Free Shipping on order $99.00
                        </p>
                      </div>
                      <button className="text-white bg-[#1d284f] py-2 px-5 rounded-md">
                        Shop Now
                      </button>
                    </div>
                    {/* Image */}
                    <img
                      src={home1}
                      alt="Home"
                      className="h-[40vh] lg:h-[80vh] object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradient-to-r from-[#f7e9ea] to-[#e0e0e0] h-[80vh] lg:h-[80vh] w-full text-[#404040]">
                  <div className="flex flex-col lg:flex-row justify-around items-center h-full p-5">
                    {/* Text Content */}
                    <div className="flex flex-col gap-5 text-center lg:text-left">
                      <p className="text-xl lg:text-3xl">
                        LIFESTYLE COLLECTION
                      </p>
                      <p className="text-2xl lg:text-5xl font-bold">MEN</p>
                      <div>
                        <p className="text-lg lg:text-2xl font-medium">
                          SALE UP TO{" "}
                          <span className="text-[#eb7c7b]">30% OFF</span>
                        </p>
                        <p className="text-sm lg:text-base">
                          Get Free Shipping on order $99.00
                        </p>
                      </div>
                      <button className="text-white bg-[#1d284f] py-2 px-5 rounded-md">
                        Shop Now
                      </button>
                    </div>
                    {/* Image */}
                    <img
                      src={home1}
                      alt="Home"
                      className="h-[40vh] lg:h-[70vh] object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Slider Section */}
          <div className="h-auto lg:h-[70vh] w-full lg:w-[35%] flex flex-col gap-6 mt-5 lg:mt-0">
            <Slider />
            <Slider2 />
          </div>
        </div>

        <Slider3 />

        {/* Black Friday Sale Section */}

        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto w-full sm:w-[97%] py-5 px-4">
          <p className="text-[#1f2937] text-2xl sm:text-3xl font-bold text-center sm:text-left">
            BLACK FRIDAY SALE!
          </p>
          <div className="h-[17vh] py-1 px-1 sm:h-[13vh] w-full sm:w-[65%] clippath bg-[#1f2937] rounded-e-xl flex justify-center items-center my-4 sm:my-0 sm:py-1">
            <div className="h-full w-full sm:w-[99%] border-e-2 border-t-2 border-b-2 border-dotted border-gray-300 rounded-e-xl">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="w-full sm:w-[80%] h-[10vh] sm:h-[11vh] flex items-center overflow-hidden">
                  <p className="text-white font-semibold text-lg sm:text-3xl animate-marquee whitespace-nowrap">
                    PAY ONLY FOR YOUR LOVING ELECTRONICS
                  </p>
                </div>
                <button className="bg-white text-[#1f2937] px-4 py-2 rounded-lg font-medium hover:text-white hover:bg-[#1f2937] border sm:mt-0 sm:me-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <Slider4 />
      </div>
    </>
  );
}

export default Home;
