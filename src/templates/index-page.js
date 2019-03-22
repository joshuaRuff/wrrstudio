import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import '../components/allmy.sass'

import Layout from '../components/Layout';

export const IndexPageTemplate = ({ heading, description, artwork }) => (
    <section className="section">
      <div className="container"> 
        <div className="content">
          <h1 className="mainHeading">{heading}</h1>
          <p className="mainDesc">{description}</p>
          <h2 className="artworkDesc">{artwork.description}</h2>
          <div className="grid">
            {artwork.images.map((img, key) => (
              <div className="cell" key={key}>
                <img alt={img.title} src={`../${img.url}.jpg`} className="responsive-image" />
                <i className="imgDesc">{img.title} -{img.description}</i>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </section>
);

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.node,
  artwork: PropTypes.shape({
    images: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter)
  return (
    <Layout mdData={data}>
      <IndexPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        artwork={frontmatter.artwork}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        meta_title
        meta_description
        heading
        description
        artwork {
          description
          images {
            url 
            title
            description
          }
        }
      }
    }
  }
`;