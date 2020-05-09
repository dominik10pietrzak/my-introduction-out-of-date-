import React, { Component } from "react";
import "./skill-list-desktop.styles.scss";

import Skill from "../../components/skill/skill.component";

class SkillListDesktop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    let container = document.querySelector(".skill-list-desktop");
    let skill = document.querySelector(".list");
    let containerWidth = container.offsetWidth;
    let blSW = container.scrollWidth;
    let wDiff = blSW / containerWidth - 1; // widths difference ratio
    let mPadd = 60; // Mousemove Padding
    let damp = 2; // Mousemove response softness
    let mouseX = 0; // Real mouse position
    let mouseX2 = 0; // Modified mouse position
    let posX = 0;
    let mmAA = containerWidth - mPadd * 2; // The mousemove available area
    let mmAAr = containerWidth / mmAA; // get available mousemove fidderence ratio

    skill.style.left = `calc(-${containerWidth / 4}px - 5.5rem)`;

    window.addEventListener(
      "scroll",
      () => {
        setTimeout(() => {
          if (window.scrollY - window.innerHeight > container.offsetTop) {
            container.style.transform = "none";
            container.style.opacity = "1";
          }
        }, 500);
      },
      false
    );

    skill.addEventListener("mousemove", (e) => {
      mouseX = e.pageX - container.offsetLeft;
      mouseX2 = Math.min(Math.max(0, mouseX - mPadd), mmAA) * mmAAr;

      const sliding = setInterval(() => {
        posX += (mouseX2 - posX) / damp; // zeno's paradox equation "catching delay"
        skill.style.left = `${Math.round(-posX * wDiff)}px`;
      }, 15);
    });
  };

  componentWillUnmount = () => {
    window.clearInterval(this.sliding);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="skill-list-desktop">
        <div className="list  fade-in-down">
          <Skill data={data.html} />
          <Skill data={data.css} />
          <Skill data={data.javascript} />
          <Skill data={data.react} />
          <Skill data={data.sass} />
          <Skill data={data.git} />
          <Skill data={data.eng} />
          <Skill data={data.adobe} />
        </div>
      </div>
    );
  }
}

export default SkillListDesktop;
