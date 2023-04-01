import React from 'react';
import getMarkdownPosts from '@/Components/getPostsMetadata';
import Link from 'next/link';
import PostPreview from '@/Components/PostPreview';

const HomePage = () => {
  const slugs = getMarkdownPosts();
  const markdowns = slugs.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div>{markdowns}</div>;
};

export default HomePage;
