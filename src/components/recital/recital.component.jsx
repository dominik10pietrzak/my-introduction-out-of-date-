import React from "react";
import "./recital.styles.scss";

import background from "../../assets/guitar.jpg";

const Recital = () => {
  return (
    <div className="recital">
      <div className="content">
        <h1>Sprawdź także Recital,</h1>
        <p>
          czyli moją aplikację muzyczną wykorzystującą HowlerJS i Google
          Firebase.
        </p>
        <a
          className="link"
          href="https://dominik10pietrzak.github.io/Recital-2.0"
        >
          Kliknij tutaj
        </a>
      </div>
    </div>
  );
};

export default Recital;
