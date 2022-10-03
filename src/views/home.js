import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Response Designer</title>
        <meta property="og:title" content="International Response Designer" />
      </Helmet>
    </div>
  )
}

export default Home
