import React, { Component } from "react";
import "./contact.styles.scss";

import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipValue: "Kopiuj",
    };
  }

  componentDidMount = () => {
    const emailButton = document.getElementById("email");

    if (emailButton.innerWidth <= 1024 && window.innerHeight <= 1366) {
      window.addEventListener("touchend", () => {
        setTimeout(() => {
          this.setState({ tooltipValue: "Kopiuj" });
        }, 200);
      });
    } else {
      emailButton.addEventListener("mouseleave", () => {
        setTimeout(() => {
          this.setState({ tooltipValue: "Kopiuj" });
        }, 200);
      });
    }
  };

  render() {
    return (
      <section className="contact">
        <div className="left">
          <div className="social-media">
            <div className="contact-form">
              <i
                class="fab fa-linkedin"
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/dominik-pietrzak-0223bb197/")
                }
              ></i>
            </div>
            <div className="contact-form">
              <i
                class="fab fa-facebook-square"
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/dominik.pietrzak.10")
                }
              ></i>
            </div>
            <div className="contact-form">
              <i
                class="fab fa-instagram"
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/dominik__pietrzak/?hl=pl";
                }}
              ></i>
            </div>
            <div className="contact-form">
              <i
                class="fab fa-github-square"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/dominik10pietrzak")
                }
              ></i>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="contact-form">
            <i class="fas fa-phone"></i> <p>662-792-664</p>
          </div>
          <div
            className="contact-form"
            id="email"
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText("d.pietrzak516@op.pl");
                this.setState({ tooltipValue: "Skopiowano" });
              }
            }}
          >
            <i class="far fa-envelope"></i>{" "}
            <p id="email-to-copy">d.pietrzak516@op.pl</p>
          </div>
          <p className="copyright">
            <span>&copy;</span>2020 Dominik Pietrzak
          </p>
        </div>
      </section>
    );
  }
}

export default Contact;
