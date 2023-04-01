import matter from 'gray-matter';
import { postsMetaData } from '@/Components/postMetadata';
import fs from 'fs';
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

export default getMarkdownPosts;
