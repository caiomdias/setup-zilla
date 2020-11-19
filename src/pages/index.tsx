import React from 'react';
import Head from 'next/head';

import ZillaImage from '../assets/dinosaur.svg';
import { Layout } from '../components/layout/layout';

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>SetUp Zilla</title>
    </Head>
    <ZillaImage />
    <h1>SetUp-Zilla</h1>
    <p>A setup configuration to my personals next.js projects.</p>
  </Layout>
);

export default Home;
