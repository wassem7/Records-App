'use-client';

import React from 'react';
import SearchIcon from './SearchIcon';

const Searchbar = () => {
  return (
    <div
      className='flex flex-row 
    items-center justify-center  '
    >
      <div className='flex bg-slate-600 px-2 py-3 md:py-4 rounded-2xl flex-1 '>
        <input
          type='text'
          placeholder='Search with  Name ..'
          className='outline-none flex-1 placeholder-slate-400  bg-slate-600 text-slate-300 mx-2'
        />
        <div className='mx-2'>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
