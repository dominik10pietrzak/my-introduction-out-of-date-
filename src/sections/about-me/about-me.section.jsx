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
                Szukam pracy na stanowisku Junior Front-End Developera. Jestem
                osobą ambitną, szalenie chętną do nauki i rozwoju. Programowania
                uczę się już kilka lat, a moja przygoda z front-endem zaczęła
                się około 1.5 roku temu.
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
