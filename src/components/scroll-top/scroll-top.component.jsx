import React, { Component } from "react";
import "./scroll-top.styles.scss";

import $ from "jquery";

import arrow from "../../assets/top.png";

class ScrollTop extends Component {
  scrollToTop = () => {
    $("html, body").animate({ scrollTop: 0 }, 750, "linear");
  };

  componentDidMount = () => {
    const btn = document.querySelector(".scroll-top");

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > window.innerHeight / 2) {
          btn.classList.remove("scroll__top__animation");
        } else if (window.scrollY < window.innerHeight / 2) {
          btn.classList.add("scroll__top__animation");
        }
      },
      false
    );
  };

  render() {
    return (
      <div
        className="scroll-top scroll__top__animation"
        onClick={this.scrollToTop}
      >
        <i class="fas fa-chevron-up"></i>
      </div>
    );
  }
}

export default ScrollTop;
