import React from 'react';
import getMarkdownPosts from '@/Components/getPostsMetadata';
import PostPreview from '@/Components/PostPreview';

const HomePage = () => {
  const slugs = getMarkdownPosts();
  const markdowns = slugs.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {markdowns}
    </div>
  );
};

export default HomePage;
