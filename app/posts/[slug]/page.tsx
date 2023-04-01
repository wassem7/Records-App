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
      <h1 className='text-cyan-700 font-mono font-bold text-3xl mb-1 text-center'>
        {posts.data.title}
      </h1>
      <p className=' text-slate-400 font-mono text-md mb-5 text-center'>
        {posts.data.date}
      </p>
      <article className='prose lg:prose-xl font-mono'>
        <Markdown>{posts.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
