import React from 'react';
import { postsMetaData } from './postMetadata';
import Link from 'next/link';

const PostPreview = (props: postsMetaData) => {
  return (
    <div
      key={props.slug}
      className='border border-slate-300 rounded-md p-4 bg-white '
    >
      <p className=' text-slate-400 font-mono text-sm mb-2'>
        {props.date}
      </p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className='hover:underline hover:underline-offset-2  text-cyan-600 font-mono font font-semibold text-2xl mb-1'>
          {props.title}
        </h2>
      </Link>
      <p className='text-slate-600 font-mono text-sm'>
        {props.subtitle}
      </p>
    </div>
  );
};

export default PostPreview;
