import React from "react";
import "./header.styles.scss";

import "hamburgers";
import $ from "jquery";

let isActive = false;

const scrollToSection = (section) => {
  let isChrome = false;
  if (window.chrome && !window.opr) {
    isChrome = true;
  }

  if (isChrome) {
    $("html, body").animate(
      { scrollTop: $(section).offset().top },
      750,
      "swing"
    );
  } else {
    $("html, body").animate(
      { scrollTop: $(section).offset().top },
      "slow",
      "swing"
    );
  }

  if (window.innerWidth <= 1024 && window.innerHeight <= 1366) {
    handleMenuClick();
  }
};

const handleMenuClick = () => {
  document.querySelector(".header").classList.toggle("black-bgc");
  document.querySelector(".menu-list").classList.toggle("menu-list-active");
  document.querySelector(".hamburger").classList.toggle("is-active");

  const listElements = [...document.querySelectorAll(".menu-list li")];

  isActive = !isActive;

  if (isActive) {
    document.querySelector("html").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";

    for (let i = 0; i < listElements.length; i++) {
      setTimeout(() => {
        listElements[i].style.opacity = "1";
      }, i * 75);
    }
  } else if (!isActive) {
    document.querySelector("html").style.overflowY = "scroll";
    document.querySelector("body").style.overflowY = "scroll";
    for (let i = 0; i < listElements.length; i++) {
      setTimeout(() => {
        listElements[i].style.opacity = "0";
      }, 1);
    }
  }
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <span className="main-color">Dominik</span> Pietrzak
        </h1>
      </div>
      <ul className="menu-list">
        <li onClick={scrollToSection.bind(this, ".about-me")}>O mnie</li>
        <li onClick={scrollToSection.bind(this, ".my-skills")}>Umiejętności</li>
        <li onClick={scrollToSection.bind(this, ".development")}>Rozwój</li>
        <li onClick={scrollToSection.bind(this, ".my-interests")}>
          Zainteresowania
        </li>
        <li onClick={scrollToSection.bind(this, ".contact")}>Kontakt</li>
      </ul>
      <button
        class="hamburger hamburger--emphatic"
        type="button"
        onClick={handleMenuClick}
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </header>
  );
};

export default Header;
