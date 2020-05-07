import React from "react";
import "./footer.styles.scss";

import Contact from "../../components/contact/contact.component";
import Recital from "../../components/recital/recital.component";

const Footer = () => {
  return (
    <div className="footer">
      <Contact />
      <Recital />
    </div>
  );
};

export default Footer;
