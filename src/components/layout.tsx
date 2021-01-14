import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";
import Header from "./header";
import { Footer } from "./footer";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        datoCmsSite {
          globalSeo {
            siteName
          }
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsHome {
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          logo {
            fluid(maxWidth: 45, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
          copyright
        }
        allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              profileType
              url
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />

        <Header logo={data.datoCmsHome.logo.fluid} />

        <div className="container">{children}</div>

        <Footer copyright={data.datoCmsHome.copyright} />
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
