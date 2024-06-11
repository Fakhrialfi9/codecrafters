import React, { useState } from "react";

import "./../../../../../../Style/Pages/Product/Product.css";
import "./../../../../../../../Main/MainStyle/Root.css";

import TextTruncate from "./../../../../../../LogicBoard/Functions/TextTruncate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faEye, faStar } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  const products = [
    // Daftar produk di sini, setiap produk harus memiliki ID unik
    {
      id: 1,
      name: "Landing Page Laravel",
      description: "Description of Product 1 goes here. You can provide details about the product in this section.",
      price: "Rp.399.000",
      discountPrice: "Rp.300.000",
      badges1: "Next Js",
      badges2: "React Js",
      badges3: "Node Js",
      badges4: "Express Js",
      rating: <FontAwesomeIcon icon={faStar} />,
      releaseDate: "12 Jan 2023",
      salesCount: 200,
    },
    {
      id: 2,
      name: "Landing Page React Js",
      description: "Description of Product 2 goes here. You can provide details about the product in this section.",
      price: "Rp.399.000",
      discountPrice: "Rp.300.000",
      badges1: "Next Js",
      badges2: "React Js",
      badges3: "Node Js",
      badges4: "Express Js",
      rating: <FontAwesomeIcon icon={faStar} />,
      releaseDate: "12 Jan 2023",
      salesCount: 150,
    },

    {
      id: 3,
      name: "Landing Page Node JS",
      description: "Description of Product 1 goes here. You can provide details about the product in this section.",
      price: "Rp.399.000",
      discountPrice: "Rp.300.000",
      badges1: "Next Js",
      badges2: "React Js",
      badges3: "Node Js",
      badges4: "Express Js",
      rating: <FontAwesomeIcon icon={faStar} />,
      releaseDate: "12 Jan 2023",
      salesCount: 200,
    },
    {
      id: 4,
      name: "Landing Page Next Js",
      description: "Description of Product 2 goes here. You can provide details about the product in this section.",
      price: "Rp.399.000",
      discountPrice: "Rp.300.000",
      badges1: "Next Js",
      badges2: "React Js",
      badges3: "Node Js",
      badges4: "Express Js",
      rating: <FontAwesomeIcon icon={faStar} />,
      releaseDate: "12 Jan 2023",
      salesCount: 150,
    },

    {
      id: 5,
      name: "Landing Page Vue Js",
      description: "Description of Product 1 goes here. You can provide details about the product in this section.",
      price: "Rp.399.000",
      discountPrice: "Rp.300.000",
      badges1: "Next Js",
      badges2: "React Js",
      badges3: "Node Js",
      badges4: "Express Js",
      rating: <FontAwesomeIcon icon={faStar} />,
      releaseDate: "12 Jan 2023",
      salesCount: 200,
    },
    {
      id: 6,
      name: "Landing Page React Js & Vite Js",
      description: "Description of Product 2 goes here. You can provide details about the product in this section.",
      price: "Rp.399.000",
      discountPrice: "Rp.300.000",
      badges1: "Next Js",
      badges2: "React Js",
      badges3: "Node Js",
      badges4: "Express Js",
      rating: <FontAwesomeIcon icon={faStar} />,
      releaseDate: "12 Jan 2023",
      salesCount: 150,
    },
    // Tambahkan produk lain di sini
  ];

  // State untuk halaman aktif
  // State untuk halaman aktif
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Menampilkan 5 produk per halaman

  if (!products || products.length === 0) {
    return <div>Maaf, Product Sedang Perbaikan</div>;
  }

  // Menghitung indeks awal dan akhir produk yang akan ditampilkan di halaman saat ini
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fungsi untuk mengatur halaman sebelumnya
  const prevPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fungsi untuk mengatur halaman berikutnya
  const nextPageClick = () => {
    const numOfButtons = Math.ceil(products.length / productsPerPage);
    if (currentPage < numOfButtons) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <section>
      {currentProducts.map((product) => (
        <div key={product.id} className="CardAllProductCodeCraftersContentSideBar">
          <div class="CardAllProductCodeCraftersContentSideBarLeft">{/* <img src="product-image.jpg" alt="Product Image"> */}</div>
          <div class="CardAllProductCodeCraftersContentSideBarCenter">
            <div className="CardAllProductCodeCraftersContentSideBarCenterContainer">
              <div className="CardAllProductCodeCraftersContentSideBarCenterTop">
                <h2 className="HeadlineAllProduct">
                  <TextTruncate text={product.name} maxLength={30}></TextTruncate>
                </h2>
                <h5 className="DescriptionAllProduct">
                  <TextTruncate text={product.description} maxLength={100}></TextTruncate>
                </h5>
              </div>
              <div className="CardAllProductCodeCraftersContentSideBarCenterCenter">
                <div className="PriceAllProductContainer">
                  <p className="PriceAllProduct">{product.price}</p>
                  <p className="DiscountPriceAllProduct">{product.discountPrice}</p>
                </div>
              </div>
              <div className="CardAllProductCodeCraftersContentSideBarCenterBottom">
                <div className="BagdeTypeAllProductContainer">
                  <b className="BagdeTypeAllProduct">{product.badges1}</b>
                  <b className="BagdeTypeAllProduct">{product.badges2}</b>
                  <b className="BagdeTypeAllProduct">{product.badges3}</b>
                  <b className="BagdeTypeAllProduct">{product.badges4}</b>
                </div>
              </div>
            </div>
          </div>
          <div class="diverlineborder"></div>
          <div class="CardAllProductCodeCraftersContentSideBarRight">
            <div class="CardAllProductCodeCraftersContentSideBarRightContainer">
              <div className="CardAllProductCodeCraftersContentSideBarRightTop">
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faShare} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </div>
              <div className="CardAllProductCodeCraftersContentSideBarRightCenter">
                <div class="CardAllProductCodeCraftersContentSideBarRightRating">
                  <span class="AllProductRatingStart">{product.rating}</span>
                </div>
                <div class="CardAllProductCodeCraftersContentSideBarRightDateRealese">
                  <span class="AllProductDateRealese">
                    Realese <b>{product.releaseDate}</b>
                  </span>
                </div>
                <div class="CardAllProductCodeCraftersContentSideBarRightSalesCount">
                  <span class="AllProductSalesCount">
                    Sales <b>{product.salesCount}</b>
                  </span>
                </div>
              </div>
              <div className="CardAllProductCodeCraftersContentSideBarRightBottom">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="CardTheArticlePaginationContainer">
        <ul className="CardTheArticlePaginationContent">
          <li className={` ${currentPage === 1 ? "disabled" : ""}`}>
            <a onClick={prevPageClick}>Prev</a>
          </li>
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
            <li key={index}>
              <a onClick={() => paginate(index + 1)}>{index + 1}</a>
            </li>
          ))}
          <li className={` ${currentPage === Math.ceil(products.length / productsPerPage) ? "disabled" : ""}`}>
            <a onClick={nextPageClick}>Next</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LandingPage;
