import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './all.sass'
import './allmy.sass'

const TemplateWrapper = ({ children, mdData }) => {
  const { frontmatter } = mdData.markdownRemark;

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{frontmatter.meta_title}</title>
        <meta name="description" content={frontmatter.meta_description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={frontmatter.meta_title} />
        <meta property="og:url" content="https://wrrstudio.com" />
        <meta property="og:image" content="/img/logo.png" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  );
};

TemplateWrapper.defaultProps = {
  mdData: {
    markdownRemark: {
      frontmatter: {
        meta_title: 'Wayne Ruff Studio',
        meta_description: 'Wayne Ruff Studio features artwork by Kansas City artist Wayne Ruff.'
      }
    }
  }
}

export default TemplateWrapper
