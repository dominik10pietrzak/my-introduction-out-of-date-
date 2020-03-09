import React, { Component } from "react";
import "./my-interests.styles.scss";

import football from "../../assets/gym.jpg";
// import music from "../../assets/cassette.jpg";

class MyInterests extends Component {
  componentDidMount = () => {
    const container = document.querySelector(".my-interests .container");
    const MyInterests = document.querySelector(".my-interests");

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY + window.innerHeight - 750 > MyInterests.offsetTop) {
          container.classList.add("swipe");
        }
      },
      false
    );
  };

  render() {
    return (
      <section className="my-interests">
        <div className="background"></div>
        <h1 className="headline">Czym się interesuję</h1>
        <div className="container" id="interests-container">
          <span className="text">
            Wolny czas lubię spędzać aktywnie, zazwyczaj na siłowni albo na
            boisku. Dbanie o formę fizyczną uważam za rzecz niezwykle ważną, nie
            tylko ze względu na zdrowie, ale także dlatego, że regularnie
            uprawiając sport, ćwiczymy swój charakter, co korzystnie wpływa
            także na inne dziedziny życia.
            <br />
            <br />
            Lubię także poczytać dobrą książkę, nie tylko beletrystykę, bardzo
            chętnie sięgam po pozycje z gatunku literatura faktu np. o biznesie
            czy ekonomii. Nie mógłbym nie wspomnieć także o muzyce, słucham jej
            praktycznie bez przerwy. Umiem także (a przynajmniej kiedyś umiałem)
            grać na pianinie.
          </span>
          <img src={football} alt="football" />
        </div>
      </section>
    );
  }
}

export default MyInterests;
