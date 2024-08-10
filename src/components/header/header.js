import React from "react";
import "../header/header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
const header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          {/* <div className="header-top header-top-ptb-1 d-none d-lg-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-4">
                  <div className="header-info">
                    <ul>
                      <li>
                        <a href="page-about.htlm">About Us</a>
                      </li>
                      <li>
                        <a href="page-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="shop-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="shop-order.html">Order Tracking</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-4">
                  <div className="text-center">
                    <div
                      id="news-flash"
                      className="d-inline-block"
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        height: "14px",
                      }}
                    >
                      <ul
                        style={{
                          position: "absolute",
                          margin: "0px",
                          padding: "0px",
                          top: "0px",
                        }}
                      >
                        <li
                          style={{
                            margin: "0px",
                            padding: "0px",
                            height: "14px",
                          }}
                        >
                          Trendy 25silver jewelry, save up 35% off today
                        </li>
                        <li
                          style={{
                            margin: "0px",
                            padding: "0px",
                            height: "14px",
                          }}
                        >
                          100% Secure delivery without contacting the courier
                        </li>
                        <li
                          style={{
                            margin: "0px",
                            padding: "0px",
                            height: "14px",
                          }}
                        >
                          Supper Value Deals - Save more with coupons
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <div className="header-info header-info-right">
                    <ul>
                      <li>
                        Need help? Call Us:{" "}
                        <strong className="text-brand"> + 1800 900</strong>
                      </li>
                      <li>
                        <a className="language-dropdown-active" href="#">
                          English <i className="fi-rs-angle-small-down"></i>
                        </a>
                        <ul className="language-dropdown">
                          <li>
                            <a href="#">
                              <img src="assets/imgs/theme/flag-fr.png" alt="" />
                              Français
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="assets/imgs/theme/flag-dt.png" alt="" />
                              Deutsch
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="assets/imgs/theme/flag-ru.png" alt="" />
                              Pусский
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="language-dropdown-active" href="#">
                          USD <i className="fi-rs-angle-small-down"></i>
                        </a>
                        <ul className="language-dropdown">
                          <li>
                            <a href="#">
                              <img src="assets/imgs/theme/flag-fr.png" alt="" />
                              INR
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="assets/imgs/theme/flag-dt.png" alt="" />
                              MBP
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="assets/imgs/theme/flag-ru.png" alt="" />
                              EU
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} className="logo" alt="logo" />
            </div>
            {/* Header Search Start here */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <div className="selectDrop cursor">All Categories</div>
                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon" />
                </div>
              </div>
            </div>

            {/* Header Search End here */}
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
