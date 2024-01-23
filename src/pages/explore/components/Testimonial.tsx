import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Quote from "../assets/images/Quote Icon.svg";

function Testimonial() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h1 className="max-w-lg text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            Testimonials
          </h1>
          <p className="text-sm text-gray-700 py-2">
            What people are saying about working with us.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          slidesPerView={3}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            375: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            575: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            767: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
              <SwiperSlide>
                <div className="bg-white flex flex-col justify-between p-5 border shadow-sm">
                  <div>
                    <img
                      className="inline-flex items-center px-2 py-1 my-2"
                      src={Quote}
                      alt=""
                    />
                    <p className=" text-xs text-black my-2">
                      A flower in my garden, a mystery in my panties. Heart
                      attack never stopped old Big Bear. A flower in my garden,
                      a mystery in my panties. Heart attack never stopped old
                      Big Bear. A flower in my garden, a mystery in my panties.
                      Heart attack never stopped old Big Bear.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white flex flex-col justify-between p-5 border shadow-sm">
                  <div>
                    <img
                      className="inline-flex items-center px-2 py-1 my-2"
                      src={Quote}
                      alt=""
                    />
                    <p className=" text-xs text-black my-2">
                      A flower in my garden, a mystery in my panties. Heart
                      attack never stopped old Big Bear. A flower in my garden,
                      a mystery in my panties. Heart attack never stopped old
                      Big Bear. A flower in my garden, a mystery in my panties.
                      Heart attack never stopped old Big Bear.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white flex flex-col justify-between p-5 border shadow-sm">
                  <div>
                    <img
                      className="inline-flex items-center px-2 py-1 my-2"
                      src={Quote}
                      alt=""
                    />
                    <p className=" text-xs text-black my-2">
                      A flower in my garden, a mystery in my panties. Heart
                      attack never stopped old Big Bear. A flower in my garden,
                      a mystery in my panties. Heart attack never stopped old
                      Big Bear. A flower in my garden, a mystery in my panties.
                      Heart attack never stopped old Big Bear.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white flex flex-col justify-between p-5 border shadow-sm">
                  <div>
                    <img
                      className="inline-flex items-center px-2 py-1 my-2"
                      src={Quote}
                      alt=""
                    />
                    <p className=" text-xs text-black my-2">
                      A flower in my garden, a mystery in my panties. Heart
                      attack never stopped old Big Bear. A flower in my garden,
                      a mystery in my panties. Heart attack never stopped old
                      Big Bear. A flower in my garden, a mystery in my panties.
                      Heart attack never stopped old Big Bear.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white flex flex-col justify-between p-5 border shadow-sm">
                  <div>
                    <img
                      className="inline-flex items-center px-2 py-1 my-2"
                      src={Quote}
                      alt=""
                    />
                    <p className=" text-xs text-black my-2">
                      A flower in my garden, a mystery in my panties. Heart
                      attack never stopped old Big Bear. A flower in my garden,
                      a mystery in my panties. Heart attack never stopped old
                      Big Bear. A flower in my garden, a mystery in my panties.
                      Heart attack never stopped old Big Bear.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white flex flex-col justify-between p-5 border shadow-sm">
                  <div>
                    <img
                      className="inline-flex items-center px-2 py-1 my-2"
                      src={Quote}
                      alt=""
                    />
                    <p className=" text-xs text-black my-2">
                      A flower in my garden, a mystery in my panties. Heart
                      attack never stopped old Big Bear. A flower in my garden,
                      a mystery in my panties. Heart attack never stopped old
                      Big Bear. A flower in my garden, a mystery in my panties.
                      Heart attack never stopped old Big Bear.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white flex flex-col justify-between p-5 border shadow-sm">
                  <div>
                    <img
                      className="inline-flex items-center px-2 py-1 my-2"
                      src={Quote}
                      alt=""
                    />
                    <p className=" text-xs text-black my-2">
                      A flower in my garden, a mystery in my panties. Heart
                      attack never stopped old Big Bear. A flower in my garden,
                      a mystery in my panties. Heart attack never stopped old
                      Big Bear. A flower in my garden, a mystery in my panties.
                      Heart attack never stopped old Big Bear.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
