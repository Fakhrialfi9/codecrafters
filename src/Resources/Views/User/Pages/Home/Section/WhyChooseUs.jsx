import React, { useRef } from "react";

import "./../../../../../Style/Pages/Home/Home.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleMobile.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleTablet.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleHuge.css";

import { handleSlideChange, onAutoplayTimeLeft } from "./../../../../../LogicBoard/Pages/Home/WhyChooseUsSlider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import Container from "react-bootstrap/esm/Container";

function WhyChooseUs() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  return (
    <Container fluid>
      <div className="ContentCardWhyChooseUsTop">
        <div className="CardWhyChooseUsLeftTop">
          <div className="CardWhyChooseUsImg">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
        </div>
        <div className="CardWhyChooseUsRightTop">
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </h5>
        </div>
      </div>
      <div className="ContentCardWhyChooseUsBottom">
        <div className="CardWhyChooseUsLeftBottom">
          <div className="CardWhyChooseUsImg">{/* <img src={images.ImageProduct2} alt="LogoNode" /> */}</div>
        </div>
        <div className="CardWhyChooseUsRightBottom">
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </h5>
        </div>
      </div>
      <div className="ContainerSwiperWhyChooseUs">
        {/* Start Swiper Why Choose Us */}
        <Swiper
          modules={[Scrollbar, Keyboard, Pagination, Navigation, Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          loop={true}
          pagination={{ dynamicBullets: true }}
          autoplay={{ delay: 900, disableOnInteraction: false }}
          onAutoplayTimeLeft={(swiper, time, progress) => onAutoplayTimeLeft(swiper, time, progress, progressCircle, progressContent)}
          className="mySwiper"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          breakpoints={{
            // Tambahkan breakpoint di sini
            320: {
              slidesPerView: 1, // Jumlah slide per tampilan pada lebar 768px atau lebih
              spaceBetween: 0, // Ruang antara slide pada lebar 768px atau lebih
            },
            375: {
              slidesPerView: 1, // Jumlah slide per tampilan pada lebar 768px atau lebih
              spaceBetween: 0, // Ruang antara slide pada lebar 768px atau lebih
            },
            480: {
              slidesPerView: 1, // Jumlah slide per tampilan pada lebar 768px atau lebih
              spaceBetween: 0, // Ruang antara slide pada lebar 768px atau lebih
            },
            668: {
              slidesPerView: 1, // Jumlah slide per tampilan pada lebar 768px atau lebih
              spaceBetween: 0, // Ruang antara slide pada lebar 768px atau lebih
            },
            768: {
              slidesPerView: 1, // Jumlah slide per tampilan pada lebar 768px atau lebih
              spaceBetween: 0, // Ruang antara slide pada lebar 768px atau lebih
            },
            1024: {
              slidesPerView: 2, // Jumlah slide per tampilan pada lebar 1024px atau lebih
              spaceBetween: 15, // Ruang antara slide pada lebar 1024px atau lebih
            },
            1124: {
              slidesPerView: 2, // Jumlah slide per tampilan pada lebar 1024px atau lebih
              spaceBetween: 20, // Ruang antara slide pada lebar 1024px atau lebih
            },
            1280: {
              slidesPerView: 2, // Jumlah slide per tampilan pada lebar 1024px atau lebih
              spaceBetween: 25, // Ruang antara slide pada lebar 1024px atau lebih
            },
            1324: {
              slidesPerView: 5, // Jumlah slide per tampilan pada lebar 1024px atau lebih
              spaceBetween: 30, // Ruang antara slide pada lebar 1024px atau lebih
            },
          }}
        >
          {/* End Slider */}
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhyChooseUsSwiperContent">
              <div className="SwiperCardWhyChooseUs">{/* <img src={images.ImageProduct1} alt="LogoNode" /> */}</div>
            </div>
          </SwiperSlide>

          {/* End Slider */}
          <div className="DisplayNone">
            <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        {/* End Swiper Why Choose Us */}
      </div>
    </Container>
  );
}
export default WhyChooseUs;
