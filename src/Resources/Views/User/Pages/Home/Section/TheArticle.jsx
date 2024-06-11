import React, { useState } from "react";

import "./../../../../../Style/Pages/Home/Home.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleMobile.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleTablet.css";
import "./../../../../../Style/Pages/Home/Responsive/HomeStyleHuge.css";

import TextTruncate from "./../../../../../LogicBoard/Functions/TextTruncate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

function TheArtcile() {
  const products = [
    // Daftar produk di sini, setiap produk harus memiliki ID unik
    {
      id: 1,
      Badges: "Next Js",
      Name: "Landing Page Laravel",
      Description: "Description of Product 1 goes here. You can provide details about the product in this section.",
      LoveCount: "200",
      ShareCount: "500",
    },
    {
      id: 2,
      Badges: "Next Js",
      Name: "Landing Page Laravel",
      Description: "Description of Product 1 goes here. You can provide details about the product in this section.",
      LoveCount: "200",
      ShareCount: "500",
    },

    {
      id: 3,
      Badges: "Next Js",
      Name: "Landing Page Laravel",
      Description: "Description of Product 1 goes here. You can provide details about the product in this section.",
      LoveCount: "200",
      ShareCount: "500",
    },
    {
      id: 4,
      Badges: "Next Js",
      Name: "Landing Page Laravel",
      Description: "Description of Product 1 goes here. You can provide details about the product in this section.",
      LoveCount: "200",
      ShareCount: "500",
    },

    {
      id: 5,
      Badges: "Next Js",
      Name: "Landing Page Laravel",
      Description: "Description of Product 1 goes here. You can provide details about the product in this section.",
      LoveCount: "200",
      ShareCount: "500",
    },
    {
      id: 6,
      Badges: "Next Js",
      Name: "Landing Page Laravel",
      Description: "Description of Product 1 goes here. You can provide details about the product in this section.",
      LoveCount: "200",
      ShareCount: "500",
    },
    // Tambahkan produk lain di sini
  ];

  // State untuk halaman aktif
  // State untuk halaman aktif
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Menampilkan 5 produk per halaman

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
      <div className="CardTheArticleContainer">
        <div className="CardTheArticleContent">
          {/* Card The Arti-Cle Content */}

          {currentProducts.map((product) => (
            <div key={product.id} className="CardTheArticle">
              <div className="CardImgTheArticle">
                <div className="BadgeCardImgTheArticle">
                  <h6>
                    <TextTruncate text={product.Badges} maxLength={6} />
                  </h6>
                </div>
              </div>
              <div className="CardTheArticleDescription">
                <h5>
                  <TextTruncate text={product.Name} maxLength={35} />
                </h5>
                <p>
                  <TextTruncate text={product.Description} maxLength={115} />
                </p>
              </div>
              <div className="ButtonCardTheArticle">
                <ul className="ButtonCardTheArticleMenu">
                  {/* Start Button Menu The Arti-Cle */}
                  <li className="ButtonCardTheArticleItem">
                    <a className="ButtonCardTheArticleLink" href="/">
                      <button>
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                      <span>{product.LoveCount}</span>
                    </a>
                  </li>
                  <li className="ButtonCardTheArticleItem">
                    <a className="ButtonCardTheArticleLink" href="/">
                      <button>
                        <FontAwesomeIcon icon={faShare} />
                      </button>
                      <span>{product.ShareCount}</span>
                    </a>
                  </li>
                  {/* Start Button Menu The Arti-Cle */}
                </ul>
              </div>
            </div>
          ))}

          {/* Card The Arti-Cle Content */}
        </div>
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
      </div>
    </section>
  );
}
export default TheArtcile;
