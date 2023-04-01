import React from 'react';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getMarkdownPosts from '@/Components/getPostsMetadata';
interface propsInterface {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const posts = getMarkdownPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

const getMarkdownContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf-8');
  const matterResults = matter(content);
  return matterResults;
};
const PostPage = (props: propsInterface) => {
  const posts = getMarkdownContent(props.params.slug);
  return (
    <div className=''>
      <h1 className='text-orange-700 text-xl underline underline-offset-2 mb-3'>
        {posts.data.title}
      </h1>
      <Markdown>{posts.content}</Markdown>
    </div>
  );
};

export default PostPage;
