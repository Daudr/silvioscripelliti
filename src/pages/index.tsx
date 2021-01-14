import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Presentazione } from "../components/presentazione";
import { ChiSono } from "../components/chi-sono";

const IndexPage = ({ data }) => (
  <Layout>
    <Presentazione
      description={data.datoCmsPresentazione.descrizione}
      photo={data.datoCmsPresentazione.foto.fluid}
    />

    <ChiSono
      title={data.datoCmsChiSono.titolo}
      description={data.datoCmsChiSono.descrizione}
      photo={data.datoCmsChiSono.foto.fluid}
      clients={data.datoCmsChiSono.clienti.map((cliente) => cliente.fluid)}
    />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    datoCmsPresentazione {
      descrizione
      foto {
        fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }

    datoCmsChiSono {
      descrizione
      titolo
      foto {
        fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      clienti {
        fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
