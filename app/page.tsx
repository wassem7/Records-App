/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Searchbar from './Searchbar';

const HomePage = () => {
  return (
    <div className=''>
      <div className=' p-5 '>
        <h1 className='text-white  text-center text-xl md:text-xl font-montserrat -mb-2 md:mb-0 '>
          Regalia Church
        </h1>
        <h1 className='text-center text-[40px] md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400  font-montserrat font-bold -mb-4 md:mb-0'>
          Records House
        </h1>
      </div>
      <Searchbar />
      <div className='text-slate-400 justify-center font-montserrat mt-3 flex flex-row'>
        <p>Cannot find your info ? </p>
        <span className='ml-2'>
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400  hover:underline hover:cursor-pointer underline-offset-2 decoration-yellow-300 '>
            Get Started here
          </p>
        </span>
      </div>
    </div>
  );
};

export default HomePage;
