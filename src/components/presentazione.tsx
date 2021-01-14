import React from "react";
import Img from "gatsby-image";

import "./presentazione.scss";

export const Presentazione = ({ description, photo }) => (
  <div className="presentazione">
    <div
      className="presentazione__description"
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>

    <Img className="presentazione__photo" fluid={photo} />
  </div>
);
