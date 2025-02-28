import React from 'react';
import { FaCopyright } from 'react-icons/fa'; // Importing the copyright icon

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className='w-full h-12 bg-navy flex justify-center items-center'>
      <p className='text-white flex items-center'>
        <FaCopyright className='mr-1' /> {currentYear} Awoke Atanaw. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;