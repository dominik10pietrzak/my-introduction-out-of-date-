import React, { Component } from "react";
import "./contact.styles.scss";

import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipValue: "Kopiuj"
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
        <div className="background"></div>
        <h1 className="headline">Kontakt</h1>
        <div className="normal">
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
            <i class="fas fa-envelope-square"></i>
            <p id="email-to-copy">d.pietrzak516@op.pl</p>
            <span className="tooltip">{this.state.tooltipValue}</span>
          </div>
          <div className="contact-form">
            <i class="fas fa-phone-square"></i>
            <p>662-792-664</p>
          </div>
        </div>
        <h1 className="headline">Social Media</h1>
        <div className="social-media">
          <div className="contact-form">
            <a href="https://www.linkedin.com/in/dominik-pietrzak-0223bb197/">
              <img src={linkedin} alt="linkedin" />
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="contact-form">
            <a href="https://www.facebook.com/dominik.pietrzak.10">
              <img src={facebook} alt="facebook" />
              <p>Facebook</p>
            </a>
          </div>
          <div className="contact-form">
            <a href="https://www.instagram.com/dominik__pietrzak/?hl=pl">
              <img src={instagram} alt="instagram" />
              <p>Instagram</p>
            </a>
          </div>
        </div>
        <p className="copyright">&copy; 2020 Dominik Pietrzak</p>
      </section>
    );
  }
}

export default Contact;
