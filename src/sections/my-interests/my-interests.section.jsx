import React, { Component } from "react";
import "./my-interests.styles.scss";

import football from "../../assets/van.jpg";
import music from "../../assets/music.jpg";

class MyInterests extends Component {
  componentDidMount = () => {
    const container = document.querySelector(".my-interests .container");
    const MyInterests = document.querySelector(".my-interests");

    let additionalHeight =
      window.innerWidth <= 1024 && window.innerHeight <= 1366 ? 500 : 650;
  };

  render() {
    return (
      <section className="my-interests">
        <div className="left">
          <img src={football} className="additional" />
          <img src={music} />
          <p>
            Zainteresowanie muzyką skłoniło mnie do stworzenia prostej aplikacji
            muzycznej, zapraszam.
          </p>
          <a
            href="https://dominik10pietrzak.github.io/Recital-2.0"
            className="button"
          >
            Recital 2.0
          </a>
        </div>
        <div className="right">
          <h1 className="headline">Zainteresowania</h1>
          <span className="text">
            Interesuję się sportem, zwłaszcza piłką nożną, muzyką, której
            słucham bez przerwy, astronomią i oczywiście progamowaniem. Wolny
            czas lubię spędzać aktywnie. Dbanie o formę fizyczną uważam za rzecz
            niezwykle ważną, nie tylko ze względu na zdrowie, ale także dlatego,
            że regularnie uprawiając sport, mogę ćwiczyć swój charakter, co
            korzystnie wpływa praktycznie na wszystkie aspekty życia. Lubię
            także poczytać dobrą książkę, nie tylko beletrystykę, bardzo chętnie
            sięgam po książki naukowe z dziedzin takich jak np. ekonomia.
          </span>
        </div>
      </section>
    );
  }
}

export default MyInterests;
