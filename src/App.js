import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Opening from "./sections/opening/opening.section";
import AboutMe from "./sections/about-me/about-me.section";
import MySkills from "./sections/my-skills/my-skills.section";
import Development from "./sections/development/development.section";
import MyInterests from "./sections/my-interests/my-interests.section";
import Footer from "./sections/footer/footer.section";

import ScrollTop from "./components/scroll-top/scroll-top.component";

function App() {
  return (
    <div className="App">
      <Opening />
      <AboutMe />
      <MySkills />
      <Development />
      <MyInterests />
      <Footer />

      <ScrollTop />
    </div>
  );
}

export default App;
