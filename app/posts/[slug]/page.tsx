import React from 'react';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
interface propsInterface {
  params: {
    slug: string;
  };
}

const getMarkdownContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf-8');
  return content;
};
const PostPage = (props: propsInterface) => {
  const content = getMarkdownContent(props.params.slug);
  return (
    <div className='text-orange-700'>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default PostPage;
