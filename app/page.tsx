/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Searchbar from './Searchbar';

const HomePage = () => {
  return (
    <div className=''>
      <div className=' p-5 '>
        <h1 className='text-white  text-center text-xl md:text-xl font-montserrat '>
          Regalia Church
        </h1>
        <h1 className='text-center text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400  font-montserrat font-bold'>
          Records House
        </h1>
      </div>
      <Searchbar />
    </div>
  );
};

export default HomePage;
