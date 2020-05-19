import React, { Component } from "react";
import "./skill-list-mobile.styles.scss";

import Skill from "../skill/skill.component";

class SkillListMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPair: 0,
      currentSkill: 0,
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
    if (this.state.currentSkills === 5) {
      next.classList.add("inactive");
    }

    if (this.state.currentSkills < 6) {
      this.setState({ currentSkills: this.state.currentSkills + 1 });
    }
  };

  componentDidMount = () => {
    const list = document.querySelector(".skill-list-mobile");
    const skills = document.querySelectorAll(".skill");

    let numberOfElements = 1;
    if (!(window.innerWidth <= 414 && window.innerHeight <= 823)) {
      numberOfElements = 2;
    }

    for (let i = numberOfElements; i < 8; i++) {
      skills[i].style.display = "none";
      skills[i].classList.add("hidden-top");
    }

    window.addEventListener(
      "scroll",
      () => {
        setTimeout(() => {
          if (window.scrollY - window.innerHeight > list.offsetTop) {
            list.style.transform = "none";
            list.style.opacity = "1";
          }
        }, 500);
      },
      false
    );
  };

  handleMobileNext = () => {
    const skills = document.querySelectorAll(".skill");
    let pair = this.state.currentPair;

    skills[(pair + 1) * 2].style.display = "block";
    skills[(pair + 1) * 2 + 1].style.display = "block";

    setTimeout(() => {
      skills[pair * 2].classList.add("hidden-top");
      skills[pair * 2 + 1].classList.add("hidden-top");

      skills[(pair + 1) * 2].classList.remove("hidden-top");
      skills[(pair + 1) * 2 + 1].classList.remove("hidden-top");
    }, 50);
    skills[pair * 2].style.display = "none";
    skills[pair * 2 + 1].style.display = "none";

    const arrows = document.querySelectorAll(".arrow-mobile");

    this.setState({ currentPair: this.state.currentPair + 1 });

    arrows[0].classList.remove("inactive");
    if (this.state.currentPair === 2) {
      arrows[1].classList.add("inactive");
    }
  };

  handlePhoneNext = () => {
    const skills = document.querySelectorAll(".skill");
    const skill = this.state.currentSkill;

    skills[skill + 1].style.display = "block";

    setTimeout(() => {
      skills[skill].classList.add("hidden-top");

      skills[skill + 1].classList.remove("hidden-top");
    }, 50);
    skills[skill].style.display = "none";

    const arrows = document.querySelectorAll(".arrow-mobile");

    this.setState({ currentSkill: this.state.currentSkill + 1 });

    arrows[0].classList.remove("inactive");
    if (this.state.currentSkill === 6) {
      arrows[1].classList.add("inactive");
    }
  };

  handleMobilePrevious = () => {
    const skills = document.querySelectorAll(".skill");
    let pair = this.state.currentPair;

    skills[pair * 2].style.display = "none";
    skills[pair * 2 + 1].style.display = "none";

    setTimeout(() => {
      skills[pair * 2].classList.add("hidden-top");
      skills[pair * 2 + 1].classList.add("hidden-top");

      skills[(pair - 1) * 2].classList.remove("hidden-top");
      skills[(pair - 1) * 2 + 1].classList.remove("hidden-top");
    }, 50);

    skills[(pair - 1) * 2].style.display = "block";
    skills[(pair - 1) * 2 + 1].style.display = "block";

    this.setState({ currentPair: this.state.currentPair - 1 });

    const arrows = document.querySelectorAll(".arrow-mobile");

    arrows[1].classList.remove("inactive");
    if (this.state.currentPair === 1) {
      arrows[0].classList.add("inactive");
    }
  };

  handlePhonePrevious = () => {
    const skills = document.querySelectorAll(".skill");
    const skill = this.state.currentSkill;

    skills[skill - 1].style.display = "block";

    setTimeout(() => {
      skills[skill].classList.add("hidden-top");

      skills[skill - 1].classList.remove("hidden-top");
    }, 50);
    skills[skill].style.display = "none";

    const arrows = document.querySelectorAll(".arrow-mobile");

    this.setState({ currentSkill: this.state.currentSkill - 1 });

    arrows[1].classList.remove("inactive");
    if (this.state.currentSkill === 1) {
      arrows[0].classList.add("inactive");
    }
  };

  render() {
    const { data } = this.props;

    return (
      <div className="skill-list-mobile">
        <i
          class="fas fa-chevron-left arrow-mobile inactive"
          onClick={() => {
            window.innerWidth <= 414 && window.innerHeight <= 823
              ? this.handlePhonePrevious()
              : this.handleMobilePrevious();
          }}
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
        <i
          class="fas fa-chevron-right arrow-mobile"
          onClick={() => {
            window.innerWidth <= 414 && window.innerHeight <= 823
              ? this.handlePhoneNext()
              : this.handleMobileNext();
          }}
        ></i>
      </div>
    );
  }
}

export default SkillListMobile;
