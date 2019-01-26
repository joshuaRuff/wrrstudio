import React from 'react'
import Layout from '../components/Layout'
import AboutImage from '../../static/img/about.jpg'

const AboutPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div className="aboutSection">
                <img src={AboutImage} alt="Wayne Ruff" className="aboutImage" />
                <div className="aboutText">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    Meet Wayne Ruff
                  </h2>
                  <p>
                    Art is not about capturing the materialistic side of a
                    subject, it's about capturing the unseen part of the
                    subject. The essence, the emotional, the intellectual; the
                    spirit and soul of the matter is what I'm trying to capture.
                  </p>
                  <br />
                  <p>
                    Every subject requires its own style of rendering. No two
                    series of paintings should look alike. When I study a
                    subject to paint I try to understand its style... How does
                    it want to be portrayed?... What is its purpose in
                    existing?... What message does it want to send?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
