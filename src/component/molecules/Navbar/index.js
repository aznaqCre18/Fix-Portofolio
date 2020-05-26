import React from "react";
import { TweenLite, Power3 } from "gsap";

import Burger from "./../../atoms/Burger";

const work = () => {
  window.location.href = "https://github.com/aznaqCre18/";
};

const about = () => {
  window.location.href = "https://www.linkedin.com/in/aziz-aznaq-cre/";
};

export default function Navbar() {
  const showMenu = (item) => {
    TweenLite.fromTo(
      item,
      0.3,
      {
        opacity: 0,
        y: "-100%",
      },
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeIn,
      }
    );
  };

  const hideMenu = (item) => {
    TweenLite.fromTo(
      item,
      0.5,
      {
        opacity: 1,
        y: "0",
      },
      {
        opacity: 0,
        y: "-100%",
        ease: Power3.easeOut,
      }
    );
  };

  const setToActive = () => {
    const burgerIcon = document.querySelector(".burger-container");
    const navMenu = document.querySelector(".navbar-container");
    const All = document.getElementsByTagName("body");
    // console.log(All[0]);

    if (burgerIcon.classList.contains("active")) {
      burgerIcon.classList.remove("active");
      navMenu.classList.remove("show");
      hideMenu(navMenu);
      All[0].style.overflow = "auto";
    } else {
      burgerIcon.classList.add("active");
      navMenu.classList.add("show");
      showMenu(navMenu);
      All[0].style.overflow = "hidden";
    }
  };

  return (
    <>
      <div className="navbar-container">
        <h1>Navbar Container</h1>
      </div>
      <div className="container-nav">
        <div className="left-menu">
          <div className="logo">aznaqCre.</div>
          <div className="main-menu">
            <ul>
              <li onClick={work}>WORK</li>
              <li onClick={about}>ABOUT</li>
            </ul>
          </div>
        </div>
        <div className="right-menu">
          <div className="contact-btn">Contact</div>
          <Burger change={setToActive} />
        </div>
      </div>
    </>
  );
}
