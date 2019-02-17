import React from 'react'
import Layout from '../components/Layout'
import '../components/allmy.sass'
import Power from '../img/thePowerOfTheSpokenWord.jpg'
import Betrayal from '../img/betrayal.jpg'

const Home = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="has-text-weight-bold is-size-2">Home</h1>
          <p>Art is not about capturing the materialistic side of a subject, it's about capturing the unseen part of the subject. The essence, the emotional, the intellectual; the spirit and soul of the matter is what I'm trying to capture.</p>
          <p>Every subject requires its own style of rendering. No two series of paintings should look alike. When I study a subject to paint I try to understand its style... How does it want to be portrayed?... What is its purpose in existing?... What message does it want to send?</p>
          <img alt='' src={Power} className="imageStyle" />
          <i>"Betrayal" -Acrylic abstract collage on panel. 22x22</i>
          <img alt='' src={Betrayal} className="imageStyle" />
          <i>The Power of the Spoken Word" -Acrylic 22x22</i>
        </div>
      </div>
    </section>
  </Layout>
)

export default Home
