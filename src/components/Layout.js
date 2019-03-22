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
        <link rel="icon" type="image/png" href="../img/favicon.ico" sizes="16x16" />
      </Helmet>
      <Navbar />
      {children}
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
