import React, { useState, useEffect } from 'react';
import { Button, Img, Line, Text } from 'components';
import { BreadcrumbSVG } from 'assets/images/breadcombs';

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`bg-deep_purple-500 flex justify-between items-center gap-2 px-20 md:px-5 py-[26px] w-full`}>
      <Img className="h-[25px] w-[238px]" src="images/img_logo.svg" alt="logo" />
      {isMobile ? (
        
        <div>
         
        
          <BreadcrumbSVG width={31} height={24} fillColor="white" />
         
        </div>
      ) : (
        
        <ul className="flex sm:flex-col flex-row gap-7 sm:hidden items-start justify-start w-auto common-row-list">
          <li>
            <a href="javascript:" className="text-sm text-white-A700">
              <Text size="txtInterMedium14">SERVICES</Text>
            </a>
          </li>
          <li>
            <a href="javascript:" className="text-sm text-white-A700">
              <Text size="txtInterMedium14">ABOUT US</Text>
            </a>
          </li>
          <li>
            <a href="javascript:" className="text-sm text-white-A700">
              <Text size="txtInterMedium14">CONTACT US</Text>
            </a>
          </li>
          <li>
            <a href="javascript:" className="text-sm text-white-A700">
              <Text size="txtInterMedium14">CAREERS</Text>
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};
