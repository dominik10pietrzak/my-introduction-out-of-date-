import React, { Component } from "react";
import "./about-me.styles.scss";

import $ from "jquery";

import D from "../../assets/D.png";
import P from "../../assets/P.png";

class AboutMe extends Component {
  componentDidMount = () => {};

  handleClick = () => {
    $("html, body").animate(
      { scrollTop: $(".my-skills").offset().top },
      750,
      "swing"
    );
  };

  render() {
    return (
      <section className="about-me">
        <div className="content">
          <div className="description">
            <div>
              <h4>O mnie</h4>
              <p className="simple-info">
                <span>
                  Dominik Pietrzak,<span className="special">21</span>
                </span>
              </p>
              <p className="text">
                Szukam pracy na stanowisku Junior Frontend Developera. Jestem
                osobą pracowitą i ambitną, nie spóźniam się na ustaloną godzinę
                i nie boję się wziąć na siebie odpowiedzialności. Programowanie
                to nie tylko zajęcie z którym wiążę swoją przyszłość zawodową,
                ale także pasja którą pielęgnuję od ponad 2 lat.
              </p>
              <span className="button" onClick={this.handleClick}>
                Przejdź dalej
              </span>
            </div>
          </div>
          <div className="letters">
            <img src={D} />
            <img src={P} />
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
