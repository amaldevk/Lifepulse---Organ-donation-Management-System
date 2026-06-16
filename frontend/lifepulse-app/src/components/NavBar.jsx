import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  // Get the username from session storage
  // const username = sessionStorage.getItem('username');
  return (
    <div>
      <style>
        {`
      #viewport {
      display: flex;
      }
      #sidebar {
      width: 250px;
      height: 100vh;
      background-color: black;
      transition: transform 0.3s ease-in-out;
      transform: translateX(${isSidebarOpen ? "0" : "-100%"});
      }
      #sidebar header {
      background-color: #263238;
      color: #fff;
      font-size: 30px;
      font-family: Georgia, serif;
      font-weight: bold;
      line-height: 52px;
      text-align: center;
      background-color: blue;
      margin-bottom: 10px;
      }
      #sidebar header a {
      color: #fff;
      text-decoration: none;
      }
      #sidebar .nav {
      list-style: none;
      padding: 0;
      margin: 0;
      }
      #sidebar .nav li {
      padding: 10px 20px;
      margin-bottom: 35px;
      }
      #sidebar .nav li a {
      color: #CFD8DC;
      text-decoration: none;
      }
      #sidebar .nav li a:hover {
      background-color: #455A64;
      color: #ECEFF1;
      }
      #content {
      flex: 1;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: ${isSidebarOpen ? "250px" : "0"};
      transition: margin-left 0.3s ease-in-out;
      }
      .toggle-btn {
      position: fixed;
      top: 1px;
      left: ${isSidebarOpen ? "calc(250px + 20px)" : "10px"};
      background-color: #263238;
      color: #fff;
      border: none;
      padding: 10px;
      cursor: pointer;
      z-index: 999;
      }
      .logout-btn {
      color: #CFD8DC;
      text-align: center;
      padding: 30px;
      cursor: pointer;
      }
      .welcome-message {
      color: #CFD8DC;
      text-align: right;
      padding: 10px;
      }
      @media (max-width: 768px) {
      #sidebar {
      width: ${isSidebarOpen ? "250px" : "0"};
      transform: none;
      }
      #content {
      margin-left: 0;
      }
      .toggle-btn {
      left: ${isSidebarOpen ? "calc(250px + 20px)" : "10px"};
      }
      }
      `}
      </style>
      <div id="viewport">
        <div id="sidebar">
          <header>
            <Link to="/nav">LifePulse</Link>
          </header>
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link class="nav-link active no-underline" aria-current="page" to="/donreg">
                DONOR REGISTRATION
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/patreg">
                PATIENT REGISTRATION
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/search">
                SEARCH
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/match">
                MATCH
              </Link>
            </li>
          </ul>
          <div className="logout-btn" onClick={handleLogout}>
            <i className="zmdi zmdi-power"></i> Logout
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="4000"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      height="400px"
                      src="https://uspto.report/TM/87525086/mark.png"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      height="400px"
                      src="https://dehdan.org/ejournal/mayjun2019/organ-donation.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      height="400px"
                      src="https://image.khaleejtimes.com/?uuid=26138ed0-ed23-5097-8426-e7e31a45f50f&function=fit&type=preview&source=false&q=75&maxsize=1200&scaleup=0"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div class="card">
                <div class="card-body">
                  <h1 class="card-title" style={{ color: "purple" }}>
                    <b>103,223</b>
                  </h1>
                  <h3>
                    <b>men, women, and children are</b>
                  </h3>
                  <br />
                  <h3>
                    <b>on the national transplant</b>
                  </h3>
                  <br />
                  <h3>
                    <b>waiting list.</b>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div class="card">
                <img
                  height="230px"
                  src="https://www.organdonor.gov/sites/default/files/organ-donor/learn/statistics/seated-group.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <iframe
              width="800"
              height="350"
              src="https://www.youtube.com/embed/K4bS7YZjqhY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <br />
          <div class="row g-3">
            <div class="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div class="card">
                <img
                  height="260px"
                  src="https://www.sakraworldhospital.com/spl_splimgs/organ%20donation-2020-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p>
                    <b>WHAT IS ORGAN DONATION?</b>
                  </p>
                  <p class="card-text">
                    Organ Donation is the gift of an organ to a person with end
                    stage organ disease and who needs a transplant. The donated
                    organ may be from a deceased donor or a living donor.
                  </p>
                </div>
              </div>
            </div>
            <div class="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div class="card">
                <img
                  height="282px"
                  src="https://as1.ftcdn.net/v2/jpg/02/42/89/70/1000_F_242897016_i2C043JZfd0GmMtuXhrfuKV8gxRpp7VO.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p>
                    <b>WHAT IS TRANSPLANTATION?</b>
                  </p>
                  <p class="card-text">
                    Surgical operation in which a failing or damaged organ in
                    the human body is removed and replaced with a functioning
                    one.
                  </p>
                </div>
              </div>
            </div>
            <div class="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div class="card">
                <img
                  height="260px"
                  src="https://w.ndtvimg.com/sites/26/2016/08/17115906/organ-donation_640.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p>
                    <b>WHO CAN PLEDGE TO DONATE ORGANS?</b>
                  </p>
                  <p class="card-text">
                    Any person not less than 18 years of age, who voluntarily
                    authorizes the removal of any of his organ and/or tissue…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
      </div>
      {/* 
<button className="toggle-btn" onClick={toggleSidebar}>
   <FontAwesomeIcon icon={faBars} />
</button>
*/}
    </div>
  );
};
export default NavBar;
