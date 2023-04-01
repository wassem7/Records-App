/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='text-center text-white bg-slate-900 p-8  rounded-md my-8'>
        <Link href='/'>
          <h1 className='text-4xl font-mono font-bold'>
            Wassem's Blog 🤖
          </h1>
        </Link>

        <p className='text-slate-300 font-mono'>
          Welcome to my tech blog 👨‍💻
        </p>
      </div>
    </header>
  );
};

export default Header;
