import React, { Component } from "react";
import "./opening.styles.scss";

import Header from "../../components/header/header.component";

import $ from "jquery";

import myPhoto from "../../assets/my-photo.png";

class Opening extends Component {
  handleClick = () => {
    $("html, body").animate(
      { scrollTop: $(".about-me").offset().top },
      750,
      "swing"
    );
  };

  render() {
    return (
      <section className="opening">
        <Header />
        <div className="about-site">
          <h1>Web Development</h1>
          <p>
            Jestem początkującym Frontend Developerem. Ta strona pełni funkcję
            mojego <span>CV</span>.
          </p>
          <span className="button" onClick={this.handleClick}>
            Przejdź dalej
          </span>
        </div>
      </section>
    );
  }
}

export default Opening;
