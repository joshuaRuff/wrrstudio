import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class Home extends React.Component {
  render() {
    // const { data } = this.props
    // console.log(data);
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Home</h1>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
