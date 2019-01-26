import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../components/Navbar'
import './all.sass'
import './allmy.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/logo.jpg" />
          <link
            rel="icon"
            type="image/jpg"
            href="/img/logo.jpg"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/jpg"
            href="/img/logo.jpg"
            sizes="16x16"
          />

          <link rel="mask-icon" href="/img/logo.jpg" />
          <meta name="theme-color" content="#4e4e4e" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/logo.jpg" />
        </Helmet>
        <Navbar />
        <div className="mine">{children}</div>
      </div>
    )}
  />
)

export default TemplateWrapper
