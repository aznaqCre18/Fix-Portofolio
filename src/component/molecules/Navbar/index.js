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
    const Logo = document.querySelector(".logo");
    const mainMenu = document.querySelector(".main-menu");

    if (burgerIcon.classList.contains("active")) {
      burgerIcon.classList.remove("active");
      navMenu.classList.remove("show");
      hideMenu(navMenu);
      Logo.style.color = "black";
      mainMenu.style.zIndex = 2;
    } else {
      burgerIcon.classList.add("active");
      navMenu.classList.add("show");
      showMenu(navMenu);
      Logo.style.color = "white";
      mainMenu.style.zIndex = 1;
    }
  };

  return (
    <>
      <aside className="navbar-container">
        <div className="nav-menu-container">
          <section className="main-menu-nav">
            <ul>
              <li>Work</li>
              <li>About</li>
            </ul>
          </section>
          <section className="list-about">
            <h3>List</h3>
            <h3>List</h3>
            <h3>List</h3>
            <h3>List</h3>
          </section>
        </div>
      </aside>
      <nav className="container-nav">
        <section className="left-menu">
          <section className="logo">aznaqCre.</section>
          <section className="main-menu">
            <ul>
              <li onClick={work}>WORK</li>
              <li onClick={about}>ABOUT</li>
            </ul>
          </section>
        </section>
        <section className="right-menu">
          <div className="contact-btn">Contact</div>
          <Burger change={setToActive} />
        </section>
      </nav>
    </>
  );
}
