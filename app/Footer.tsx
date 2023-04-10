import React from 'react';

const Footer = () => {
  let year_date = new Date().getFullYear();
  return (
    <footer>
      <div className='border-t border-slate-300 text-center mt-6 py-6 text-slate-500 '>
        <p className='font-montserrat'>
          Developed by Beth Smart - {year_date}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
