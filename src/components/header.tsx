import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Img from "gatsby-image";

import "./header.scss";

const Header = ({ logo }) => (
  <header className="container">
    <div className="logo">
      <Img className="logo__img" fluid={logo} />
      <span className="logo__name">silvioscripelliti.it</span>
    </div>

    <div className="navbar">
      <nav>
        <AnchorLink className="navbar__link" to="/#home">
          Home
        </AnchorLink>
        <AnchorLink className="navbar__link" to="/#chisono">
          Chi Sono
        </AnchorLink>
        <AnchorLink className="navbar__link" to="/#servizi">
          Servizi
        </AnchorLink>
      </nav>

      <button className="navbar__action">Contattami</button>
    </div>
  </header>
);

export default Header;
