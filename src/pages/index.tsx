import React from 'react'
import Head from 'next/head'

import ZillaIcon from '../assets/dinosaur.svg'
import Layout from '../components/layout/layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Set up next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ZillaIcon />
      <h1>SetUp-Zilla</h1>
      <p>A setup configuration to my personals next.js projects.</p>
    </Layout>
  )
}

export default Home
