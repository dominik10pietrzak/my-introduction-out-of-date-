import React, { Component } from "react";
import "./skill-list-mobile.styles.scss";

import Skill from "../skill/skill.component";

class SkillListMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSkills: 0,
    };
  }

  previousSkill = () => {
    const previous = document.querySelector(".fa-chevron-left");
    const next = document.querySelector(".fa-chevron-right");

    if (this.state.currentSkills === 6) {
      next.classList.remove("inactive");
    }
    if (this.state.currentSkills === 1) {
      previous.classList.add("inactive");
    }

    if (this.state.currentSkills > 0) {
      this.setState({ currentSkills: this.state.currentSkills - 1 });
    }
  };

  nextSkill = () => {
    const previous = document.querySelector(".fa-chevron-left");
    const next = document.querySelector(".fa-chevron-right");

    if (this.state.currentSkills === 0) {
      previous.classList.remove("inactive");
    }
    if (this.state.currentSkills === 6) {
      next.classList.add("inactive");
    }

    if (this.state.currentSkills < 7) {
      this.setState({ currentSkills: this.state.currentSkills + 1 });
    }
  };

  componentDidMount = () => {
    const skill = document.querySelector(".skill-list-mobile");

    window.addEventListener(
      "scroll",
      () => {
        setTimeout(() => {
          if (window.scrollY - window.innerHeight > skill.offsetTop) {
            skill.style.transform = "none";
            skill.style.opacity = "1";
          }
        }, 500);
      },
      false
    );
  };

  render() {
    const { data } = this.props;

    const skills = [
      data.html,
      data.css,
      data.javascript,
      data.react,
      data.sass,
      data.git,
      data.eng,
      data.adobe,
    ];
    return (
      <div className="skill-list-mobile">
        <div className="skill-box">
          <div className="top">
            <img
              src={skills[this.state.currentSkills].imageUrl}
              alt="image"
              className="logo"
            />
          </div>
          {/* <div className="line"></div> */}
          <div className="bottom">
            <div className="bar">
              <i
                class="fas fa-chevron-left inactive"
                onClick={this.previousSkill}
              ></i>
              <p className="title">
                {skills[this.state.currentSkills].name.toUpperCase()}
              </p>
              <i class="fas fa-chevron-right" onClick={this.nextSkill}></i>
            </div>
            <p className="text">
              {skills[this.state.currentSkills].description}
            </p>
          </div>
        </div>
        <div className="buttons-bar"></div>
      </div>
    );
  }
}

export default SkillListMobile;
