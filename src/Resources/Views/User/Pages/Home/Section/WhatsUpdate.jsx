import React, { useRef } from "react";

import "./../../../../../Style/Pages/Home/Home.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleMobile.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleTablet.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleHuge.css";

import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function WhatsUpdate() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section>
      <div className="CardWhatsNewsContainer">
        <div className="CardWhatsNewsContent">
          <div className="CardSliderWhatsNewsContent">
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="MySwiperWhatsNewsContent"
            >
              {/* Start Card Slider */}
              <SwiperSlide>
                <div className="BackgroundColor-1"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="BackgroundColor-2"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="BackgroundColor-3"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="BackgroundColor-4"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="BackgroundColor-2"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="BackgroundColor-3"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="BackgroundColor-4"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="BackgroundColor-2"></div>
              </SwiperSlide>
              {/* End Card Slider */}
              <div className="NotchCardWhatsNewsContent"></div>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhatsUpdate;
