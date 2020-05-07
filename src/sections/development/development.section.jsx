import React, { Component } from "react";
import "./development.styles.scss";

import node from "../../assets/node.png";
import redux from "../../assets/redux.png";
import brain from "../../assets/brain.png";
import growth from "../../assets/increase.png";

class Development extends Component {
  componentDidMount = () => {
    const redux = document.getElementById("redux");
    const node = document.getElementById("node");
    const photoshop = document.getElementById("photoshop");
    const growth = document.getElementById("growth");

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY - window.innerHeight - 600 > redux.offsetTop) {
          redux.style.opacity = "1";
          redux.style.transform = "none";
        }

        if (window.scrollY - window.innerHeight - 600 > node.offsetTop) {
          node.style.opacity = "1";
          node.style.transform = "none";
        }

        if (window.scrollY - window.innerHeight - 600 > photoshop.offsetTop) {
          setTimeout(() => {
            photoshop.style.opacity = "1";
            photoshop.style.transform = "none";
          }, 250);
        }
        if (window.scrollY - window.innerHeight - 600 > growth.offsetTop) {
          setTimeout(() => {
            growth.style.opacity = "1";
            growth.style.transform = "none";
          }, 250);
        }
      },
      false
    );
  };

  render() {
    return (
      <section className="development">
        <div className="background"></div>
        <div className="content">
          <h1 className="headline">Czego się uczę</h1>
          <div className="new-skills">
            <div className="box" id="node">
              <img src={node} alt="node" />
              <div className="description">
                <h1 className="name">NodeJS</h1>
                <p className="text">
                  Kilka tygodni temu uznałem, że najwyższy czas zacząć się
                  trochę interesować Backend'em i postanowiłem zacząć uczyć się
                  NodeJS.
                </p>
              </div>
            </div>
            <div className="box" id="redux">
              <img src={redux} alt="redux" />
              <div className="description">
                <h1 className="name">Redux</h1>
                <p className="text">
                  Reduxa uczę się raczej przy okazji, korzystam z niego gdy
                  wymaga tego sytuacja, nie poświęcam mu za dużo czasu.
                </p>
              </div>
            </div>
            <div className="box" id="photoshop">
              <img src={brain} alt="brain" />
              <div className="description">
                <h1 className="name">Rozwój umysłu</h1>
                <p className="text">
                  Regularnie pracuję nad rozwojem swojej kreatywności, myślenia
                  abstrakcyjnego i wychodzenia poza schematy. Staram się także
                  ćwiczyć swoje umiejętności miękkie.
                </p>
              </div>
            </div>
            <div className="box" id="growth">
              <img src={growth} alt="growth" />
              <div className="description">
                <h1 className="name">Na tym nie koniec</h1>
                <p className="text">
                  Oprócz tego oczywiście cały czas rozwijam umiejętności
                  wymienione w sekcji wyżej, w przyszłości planuję znacznie
                  poszerzyć swój wachlarz umiejętności o wiele technologii,
                  takich jak np. Python czy Angular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Development;
