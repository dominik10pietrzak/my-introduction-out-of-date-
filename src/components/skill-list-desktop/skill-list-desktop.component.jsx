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

    const skills = document.querySelectorAll(".skill");

    for (let i = 4; i < 8; ++i) {
      skills[i].classList.add("hidden-bottom");
      skills[i].style.display = "none";
    }
  };

  handleNext = () => {
    const skills = document.querySelectorAll(".skill");

    for (let i = 0; i < 4; ++i) {
      skills[i + 4].style.display = "block";
      setTimeout(() => {
        skills[i].classList.add("hidden-top");
        skills[i + 4].classList.remove("hidden-bottom");
      }, i * 50);
      skills[i].style.display = "none";
    }

    const arrows = document.querySelectorAll(".arrow");
    arrows[0].classList.toggle("inactive");
    arrows[1].classList.toggle("inactive");
  };

  handlePrevious = () => {
    const skills = document.querySelectorAll(".skill");

    for (let i = 0; i < 4; ++i) {
      skills[i].style.display = "block";
      setTimeout(() => {
        skills[i].classList.remove("hidden-top");
        skills[i + 4].classList.add("hidden-bottom");
      }, i * 50);
      skills[i + 4].style.display = "none";
    }

    const arrows = document.querySelectorAll(".arrow");
    arrows[0].classList.toggle("inactive");
    arrows[1].classList.toggle("inactive");
  };

  render() {
    const { data } = this.props;
    return (
      <div className="skill-list-desktop">
        <i
          class="fas fa-chevron-left arrow inactive"
          onClick={this.handlePrevious}
        ></i>
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
        <i class="fas fa-chevron-right arrow" onClick={this.handleNext}></i>
      </div>
    );
  }
}

export default SkillListDesktop;
