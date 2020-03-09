import React, { Component } from "react";
import "./my-skills.styles.scss";

import SKILLS_DATA from "./skill.data";

import SkillListDesktop from "../../components/skill-list-desktop/skill-list-desktop.component";
import SkillListMobile from "../../components/skill-list-mobile/skill-list-mobile.component";

class MySkills extends Component {
  state = {
    skills: SKILLS_DATA,
    windowWidth: "",
    windowHeight: ""
  };

  componentDidMount = () => {
    const description = document.querySelector(".about-skills");

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY - window.innerHeight > description.offsetTop) {
          description.style.transform = "none";
          description.style.opacity = "1";
        }
      },
      false
    );

    window.setInterval(() => {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    }, 50);
  };

  render() {
    return (
      <section className="my-skills">
        <h1 className="headline">Co umiem</h1>
        <p className="about-skills">
          Jak już wspomniałem wyżej programowaniem zajmuję się od dłuższego
          czasu i udało mi się opanować w dobrym stopniu kilka technologii.
          Piszę kod odpowiadający głównie za Frontend, ale w niedalekiej
          przyszłości chcę się nauczyć tworzenia całego zaplecza technicznego
          aplikacji internetowych.
        </p>
        {window.innerWidth <= 1024 && window.innerHeight <= 1366 ? (
          <SkillListMobile data={this.state.skills} />
        ) : (
          <SkillListDesktop data={this.state.skills} />
        )}
      </section>
    );
  }
}

export default MySkills;
