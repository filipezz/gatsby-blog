import React from 'react';

import usePosts from '../hooks/usePosts';

import PostPreview from '../components/postPreview';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default function Home() {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h1>Read my blog!</h1>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
}
