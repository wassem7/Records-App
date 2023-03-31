import React from 'react';
import fs from 'fs';

const getMarkdownPosts = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdowns = files.filter((file) => file.endsWith('.md'));
  const slugs = markdowns.map((file) => file.replace('.md', ''));
  return slugs;
};
const HomePage = () => {
  const slugs = getMarkdownPosts();
  const markdowns = slugs.map((slug) => (
    <div key={slug}>
      <h2>{slug}</h2>
    </div>
  ));

  return <div>{markdowns}</div>;
};

export default HomePage;
