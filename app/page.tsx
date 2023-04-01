import React from 'react';
import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import { postsMetaData } from '@/Components/postMetadata';

const getMarkdownPosts: () => postsMetaData[] = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdowns = files.filter((file) => file.endsWith('.md'));

  // Get gray matter from markdowns
  const posts = markdowns.map((fileName) => {
    const fileContents = fs.readFileSync(
      `posts/${fileName}`,
      'utf-8'
    );
    const matterResults = matter(fileContents);
    return {
      title: matterResults.data.title,
      date: matterResults.data.date,
      subtitle: matterResults.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};
const HomePage = () => {
  const slugs = getMarkdownPosts();
  const markdowns = slugs.map((post) => (
    <div key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h2 className='hover:text-gray-500 mb-4'>
          {post.title}
        </h2>
      </Link>
    </div>
  ));

  return <div>{markdowns}</div>;
};

export default HomePage;
