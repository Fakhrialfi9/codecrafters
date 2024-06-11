import { useState } from "react";

import "./../../../../../Style/Pages/Home/Home.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleMobile.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleTablet.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleHuge.css";

import TextTruncate from "./../../../../../LogicBoard/Functions/TextTruncate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faEye } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Keyboard, Pagination, Navigation } from "swiper/modules";

function OurProduct() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(true);
    // Di sini Anda dapat menambahkan logika untuk menyimpan data "liked" untuk produk dengan ID productId ke server atau state aplikasi Anda.
  };

  const handleUnlikeClick = () => {
    setIsLiked(false);
    // Di sini Anda dapat menambahkan logika untuk menghapus data "liked" untuk produk dengan ID productId dari server atau state aplikasi Anda.
  };

  return (
    // OurProduct
    <div className="CardProductContainer">
      <Swiper
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={5}
        centeredSlides={true}
        modules={[Scrollbar, Keyboard, Pagination, Navigation]}
        navigation={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        breakpoints={{
          // Tambahkan breakpoint di sini
          300: {
            slidesPerView: 1, // Jumlah slide per tampilan pada lebar 768px atau lebih
            spaceBetween: 5, // Ruang antara slide pada lebar 768px atau lebih
          },
          320: {
            slidesPerView: 1, // Jumlah slide per tampilan pada lebar 768px atau lebih
            spaceBetween: 5, // Ruang antara slide pada lebar 768px atau lebih
          },
          375: {
            slidesPerView: 1, // Jumlah slide per tampilan pada lebar 768px atau lebih
            spaceBetween: 5, // Ruang antara slide pada lebar 768px atau lebih
          },
          480: {
            slidesPerView: 1, // Jumlah slide per tampilan pada lebar 768px atau lebih
            spaceBetween: 5, // Ruang antara slide pada lebar 768px atau lebih
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
            spaceBetween: 5, // Ruang antara slide pada lebar 1024px atau lebih
          },
          1124: {
            slidesPerView: 2, // Jumlah slide per tampilan pada lebar 1024px atau lebih
            spaceBetween: 5, // Ruang antara slide pada lebar 1024px atau lebih
          },
          1280: {
            slidesPerView: 2, // Jumlah slide per tampilan pada lebar 1024px atau lebih
            spaceBetween: 5, // Ruang antara slide pada lebar 1024px atau lebih
          },
          1324: {
            slidesPerView: 3, // Jumlah slide per tampilan pada lebar 1024px atau lebih
            spaceBetween: 5, // Ruang antara slide pada lebar 1024px atau lebih
          },
        }}
      >
        {/* Card Product */}
        <SwiperSlide>
          <div className="CardProductContent">
            <div className="CardProduct">
              <div className="CardImageConten">
                <img src="" alt="" />
              </div>
              <div className="CardHeadline">
                <h5>
                  <TextTruncate text="Laravel Repository Pattern Pattern Pattern" maxLength={35}></TextTruncate>
                </h5>
                <p>
                  <TextTruncate text="Temukan keunggulan penggunaan Laravel Repository Pattern dalam pengelolaan data. Simplifikasi kode Simplifikasi kode Simplifikasi kode" maxLength={115}></TextTruncate>
                </p>
              </div>
              <div className="CardProductButton">
                <div className="CardProductButtonLeft">
                  <button>Add To Cart</button>
                </div>
                <div className="CardProductButtonRight">
                  {isLiked ? (
                    <button onClick={handleUnlikeClick}>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  ) : (
                    <button onClick={handleLikeClick}>
                      <FontAwesomeIcon className="ProductLike" icon={faHeart} />
                    </button>
                  )}
                  <button>
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="CardProductContent">
            <div className="CardProduct">
              <div className="CardImageConten">
                <img src="" alt="" />
              </div>
              <div className="CardHeadline">
                <h5>
                  <TextTruncate text="Laravel Repository Pattern Pattern Pattern" maxLength={35}></TextTruncate>
                </h5>
                <p>
                  <TextTruncate text="Temukan keunggulan penggunaan Laravel Repository Pattern dalam pengelolaan data. Simplifikasi kode Simplifikasi kode Simplifikasi kode" maxLength={115}></TextTruncate>
                </p>
              </div>
              <div className="CardProductButton">
                <div className="CardProductButtonLeft">
                  <button>Add To Cart</button>
                </div>
                <div className="CardProductButtonRight">
                  {isLiked ? (
                    <button onClick={handleUnlikeClick}>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  ) : (
                    <button onClick={handleLikeClick}>
                      <FontAwesomeIcon className="ProductLike" icon={faHeart} />
                    </button>
                  )}
                  <button>
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="CardProductContent">
            <div className="CardProduct">
              <div className="CardImageConten">
                <img src="" alt="" />
              </div>
              <div className="CardHeadline">
                <h5>
                  <TextTruncate text="Laravel Repository Pattern Pattern Pattern" maxLength={35}></TextTruncate>
                </h5>
                <p>
                  <TextTruncate text="Temukan keunggulan penggunaan Laravel Repository Pattern dalam pengelolaan data. Simplifikasi kode Simplifikasi kode Simplifikasi kode" maxLength={115}></TextTruncate>
                </p>
              </div>
              <div className="CardProductButton">
                <div className="CardProductButtonLeft">
                  <button>Add To Cart</button>
                </div>
                <div className="CardProductButtonRight">
                  {isLiked ? (
                    <button onClick={handleUnlikeClick}>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  ) : (
                    <button onClick={handleLikeClick}>
                      <FontAwesomeIcon className="ProductLike" icon={faHeart} />
                    </button>
                  )}
                  <button>
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="CardProductContent">
            <div className="CardProduct">
              <div className="CardImageConten">
                <img src="" alt="" />
              </div>
              <div className="CardHeadline">
                <h5>
                  <TextTruncate text="Laravel Repository Pattern Pattern Pattern" maxLength={35}></TextTruncate>
                </h5>
                <p>
                  <TextTruncate text="Temukan keunggulan penggunaan Laravel Repository Pattern dalam pengelolaan data. Simplifikasi kode Simplifikasi kode Simplifikasi kode" maxLength={115}></TextTruncate>
                </p>
              </div>
              <div className="CardProductButton">
                <div className="CardProductButtonLeft">
                  <button>Add To Cart</button>
                </div>
                <div className="CardProductButtonRight">
                  {isLiked ? (
                    <button onClick={handleUnlikeClick}>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  ) : (
                    <button onClick={handleLikeClick}>
                      <FontAwesomeIcon className="ProductLike" icon={faHeart} />
                    </button>
                  )}
                  <button>
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="CardProductContent">
            <div className="CardProduct">
              <div className="CardImageConten">
                <img src="" alt="" />
              </div>
              <div className="CardHeadline">
                <h5>
                  <TextTruncate text="Laravel Repository Pattern Pattern Pattern" maxLength={35}></TextTruncate>
                </h5>
                <p>
                  <TextTruncate text="Temukan keunggulan penggunaan Laravel Repository Pattern dalam pengelolaan data. Simplifikasi kode Simplifikasi kode Simplifikasi kode" maxLength={115}></TextTruncate>
                </p>
              </div>
              <div className="CardProductButton">
                <div className="CardProductButtonLeft">
                  <button>Add To Cart</button>
                </div>
                <div className="CardProductButtonRight">
                  {isLiked ? (
                    <button onClick={handleUnlikeClick}>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  ) : (
                    <button onClick={handleLikeClick}>
                      <FontAwesomeIcon className="ProductLike" icon={faHeart} />
                    </button>
                  )}
                  <button>
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Card Product */}
      </Swiper>
    </div>
    // OurProduct
  );
}
export default OurProduct;
