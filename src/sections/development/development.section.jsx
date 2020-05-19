import React, { Component } from "react";
import "./development.styles.scss";

import node from "../../assets/node.png";
import redux from "../../assets/redux.png";
import bulb from "../../assets/bulb.png";
import growth from "../../assets/increase.png";

import strip from "../../assets/strip.png";

class Development extends Component {
  componentDidMount = () => {
    const redux = document.getElementById("redux");
    const node = document.getElementById("node");
    const photoshop = document.getElementById("photoshop");
    // const growth = document.getElementById("growth");

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY - window.innerHeight - 900 > node.offsetTop) {
          node.style.opacity = "1";
          node.style.transform = "none";
        }

        if (window.scrollY - window.innerHeight - 900 > redux.offsetTop) {
          setTimeout(() => {
            redux.style.opacity = "1";
            redux.style.transform = "none";
          }, 250);
        }

        if (window.scrollY - window.innerHeight - 900 > photoshop.offsetTop) {
          setTimeout(() => {
            photoshop.style.opacity = "1";
            photoshop.style.transform = "none";
          }, 500);
        }
      },
      false
    );
  };

  render() {
    return (
      <section className="development">
        <img src={strip} className="strip" />
        <div className="content">
          <div className="heading">
            <h1 className="headline">Rozwój</h1>
            <p>
              Oprócz nauki narzędzi wymienionych wyżej, staram się także cały
              czas uczyć czegoś nowego. Aktualnie uczę się:
            </p>
            <span className="button" onClick={this.handleClick}>
              Przejdź dalej
            </span>
          </div>
          <div className="new-skills">
            <div className="box" id="node">
              <div className="top">
                <img src={node} alt="node" />
                <h1 className="name">NodeJS</h1>
              </div>
              <div className="description">
                <p className="text">
                  Kilka tygodni temu uznałem, że najwyższy czas zacząć się
                  trochę interesować Backend'em i postanowiłem zacząć uczyć się
                  NodeJS.
                </p>
              </div>
            </div>
            <div className="box" id="redux">
              <div className="top">
                <img src={redux} alt="redux" />
                <h1 className="name">Redux</h1>
              </div>
              <div className="description">
                <p className="text">
                  Reduxa uczę się raczej przy okazji, korzystam z niego gdy
                  wymaga tego sytuacja, nie poświęcam mu za dużo czasu.
                </p>
              </div>
            </div>
            <div className="box" id="photoshop">
              <div className="top">
                <img src={bulb} alt="brain" />
                <h1 className="name">Rozwój umysłu</h1>
              </div>
              <div className="description">
                <p className="text">
                  Regularnie pracuję nad rozwojem swojej kreatywności, myślenia
                  abstrakcyjnego i wychodzenia poza schematy. Staram się także
                  ćwiczyć swoje umiejętności miękkie.
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
