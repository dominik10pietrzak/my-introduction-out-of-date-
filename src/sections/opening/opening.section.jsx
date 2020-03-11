import React, { Component } from "react";
import "./opening.styles.scss";

import Header from "../../components/header/header.component";

import background from "../../assets/bg-video-smoke.mp4";

class Opening extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      document.querySelector(".opening .background").style.opacity = 0.4;
    }, 500);

    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      let scrollPosition = window.pageYOffset;

      if (scrollPosition > 300) {
        header.style.transform = "translateY(-200px)";
      }
      if (scrollPosition === 0) {
        header.style.transform = "none";
      }
    });
  };

  render() {
    return (
      <section className="opening">
        <div className="bg-mobile"></div>
        <video autoPlay muted loop className="background">
          <source src={background} type="video/mp4" />
        </video>
        <Header />
        <div className="about-site">
          <h1>Web Development</h1>
          <p>Ta strona pełni funkcję mojego CV / Résumé</p>
        </div>
      </section>
    );
  }
}

export default Opening;
