import React from 'react';
import { postsMetaData } from './postMetadata';
import Link from 'next/link';

const PostPreview = (props: postsMetaData) => {
  return (
    <div key={props.slug}>
      <Link href={`/posts/${props.slug}`}>
        <h2 className='hover:text-red-800  text-red-600 text-2xl underline underline-offset-2 mb-1'>
          {props.title}
        </h2>
      </Link>
      <p>{props.subtitle}</p>
      <p className='mb-5'>{props.date}</p>
    </div>
  );
};

export default PostPreview;
