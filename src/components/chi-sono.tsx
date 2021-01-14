import { FluidObject } from "gatsby-image";
import React from "react";
import Img from "gatsby-image";

import "./chi-sono.scss";

interface ChiSonoProps {
  title: string;
  description: string;
  photo: FluidObject;
  clients: FluidObject[];
}

export const ChiSono = ({
  title,
  description,
  photo,
  clients,
}: ChiSonoProps) => (
  <div className="chi-sono">
    <Img className="chi-sono__photo" fluid={photo} />

    <div className="chi-sono__description">
      <h3 className="chi-sono__description-title">{title}</h3>
      <div
        className="chi-sono__description-text"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>

      <h3>Alcuni dei miei clienti</h3>
      <div className="chi-sono__description-clients">
        {clients.map((client) => (
          <Img
            className="chi-sono__description-clients_client"
            fluid={client}
          />
        ))}
      </div>
    </div>
  </div>
);
