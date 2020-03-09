import React, { Component } from "react";
import "./about-me.styles.scss";

import myPhoto from "../../assets/my-portrait.png";
import doc from "../../assets/document.png";

class AboutMe extends Component {
  componentDidMount = () => {
    const image = document.querySelector(".my-photo");

    window.addEventListener("scroll", () => {
      if (window.scrollY - window.innerHeight + 500 > image.offsetTop) {
        image.style.transform = "none";
        image.style.opacity = "1";
      }
    });
  };

  render() {
    return (
      <section className="about-me">
        <div className="background"></div>
        <h1 className="headline">Kim jestem</h1>
        <div className="content">
          <div className="description">
            <img src={doc} alt="portrait" className="my-photo" />
            <div>
              <h4>Dzień dobry!</h4>
              <p className="text">
                Nazywam się Dominik Pietrzak, mam 21 lat i szukam pracy jako
                Junior Front-End Developer. Jestem osobą ambitną, szalenie
                chętną do nauki i rozwoju. Cały czas poszerzam swoją wiedzę oraz
                wachlarz umiejętności.
                <br /> <br />
                Programowania zacząłem się uczyć już kilka lat temu, swoje
                pierwsze kroki stawiałem w C++. Pierwszym językiem, który
                poznałem dość dobrze i dzięki któremu naprawdę zacząłem rozumieć
                programowanie była Java. Front-Endu uczę się od mniej więcej 1.5
                roku.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
