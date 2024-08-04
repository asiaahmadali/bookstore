// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

function SwiPer() {
  return (
    <>
      <div className="flex justify-center items-center w-full bg-gradient-to-r from-purple-500 via-pink-300 to-purple-500 py-10">
        <div className="p-3 w-[70%] md:w-[80%] lg:w-[90%] bg-white rounded-lg shadow-lg relative">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".swiper-pagination", // Ensure correct pagination selector
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="images/book.jpg"
                alt="Book"
                className="rounded-lg shadow-md w-[150px] h-[170px] md:h-[200px] border-2 border-gray-400 p-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/b1.PNG"
                alt="Book"
                className="rounded-lg shadow-md w-[150px] h-[170px] md:h-[200px] border-2 border-gray-400 p-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/b2.PNG"
                alt="Book"
                className="rounded-lg shadow-md w-[150px] h-[170px] md:h-[200px] border-2 border-gray-400 p-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/b3.PNG"
                alt="Book"
                className="rounded-lg shadow-md w-[150px] h-[170px] md:h-[200px] border-2 border-gray-400 p-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/b4.PNG"
                alt="Book"
                className="rounded-lg shadow-md w-[150px] h-[170px] md:h-[200px] border-2 border-gray-400 p-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/b5.PNG"
                alt="Book"
                className="rounded-lg shadow-md w-[150px] h-[170px] md:h-[200px] border-2 border-gray-400 p-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/b6.PNG"
                alt="Book"
                className="rounded-lg shadow-md w-[150px] h-[170px] md:h-[200px] border-2 border-gray-400 p-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/b7.PNG"
                alt="Book"
                className="rounded-lg shadow-md w-[150px] h-[170px] md:h-[200px] border-2 border-gray-400 p-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/b8.PNG"
                alt="Book"
                className="rounded-lg shadow-md w-[150px] h-[170px] md:h-[200px] border-2 border-gray-400 p-2"
              />
            </SwiperSlide>
          </Swiper>
          {/* Pagination container */}
          <div className="swiper-pagination mt-5"></div>
        </div>
      </div>
    </>
  );
}

export default SwiPer;
