import slide1 from "/public/LogoYosh.png";
import slide2 from "/public/agentlik.png";
import slide3 from "/public/airways.png";
import slide4 from "/public/chevrolet.png";
import slide5 from "/public/my5.png";
import slide6 from "/public/ucell.png";

import "../style/Slider.css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

function PartnyorComponent() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("https://uzbekistans.club/api/v1/partners/")
      .then((response) => response.json())
      .then((data) => setPartners(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mb-[200px] py-[80px] bg-[#181818]">
      <div className="container">
        <div className="relative top-0 left-0">
          <article className="flex justify-between items-center mb-[35px]">
            <h1 className="text-5xl uppercase font-semibold text-white">
              Partnyors
            </h1>
            <div className="slide-btn">
              <button className="swiper-button-next">
                <svg viewBox="0 0 320 512">
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </button>
              <button className="swiper-button-prev">
                <svg viewBox="0 0 320 512">
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </button>
            </div>
          </article>

          <div className="">
            <Swiper
              slidesPerView={4}
              slidesPerGroup={1}
              spaceBetween={10}
              loop={false}
              speed={4000}
              autoplay={{
                delay: 20000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {partners.map((partner, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[276px] h-[106px] bg-[#212121] rounded-xl"
                >
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </SwiperSlide>
              ))}
              {/* <SwiperSlide className="w-[276px] h-[106px] bg-[#212121] rounded-xl">
                <a href="">
                  <img src={slide1} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-[276px] h-[106px]  bg-[#212121] rounded-xl">
                <a href="https://yoshlar.gov.uz/uz/" target="_blank">
                  <img src={slide2} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-[276px] h-[106px] bg-[#212121] rounded-xl">
                <a href="https://www.uzairways.com/uz" target="_blank">
                  <img src={slide3} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-[276px] h-[106px] bg-[#212121] rounded-xl">
                <a href="">
                  <img src={slide4} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-[276px] h-[106px] bg-[#212121] rounded-xl">
                <a href="https://my5.media/" target="_blank">
                  <img src={slide5} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-[276px] h-[106px] bg-[#212121] rounded-xl">
                <a href="https://ucell.uz/uz/subscribers" target="_blank">
                  <img src={slide6} alt="" />
                </a>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnyorComponent;
