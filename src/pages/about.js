import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function about() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is my blog</p>
      <Link to="/">Back to homepage</Link>
    </Layout>
  );
}
