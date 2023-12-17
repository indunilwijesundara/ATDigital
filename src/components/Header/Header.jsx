import React, { useState, useEffect } from 'react';
import { Button, Img, Text } from 'components';

export const Header = () => {
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
    <div className={`w-full flex flex-col ${isMobile ? 'h-full' : 'relative'}`}>
      {isMobile ? (
        <>
          <Img
            className="md:h-auto w-full object-fill"
            src="images/img_andykelly0ev.png"
            alt="andykelly0ev"
          />
          <div className="w-full px-10 sm:px-5 pb-8 pt-6 gap-5 flex flex-col items-start justify-start bg-gradient">
            <Text
              className="capitalize leading-[100.00%] max-w-[556px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px]"
              size="txtInterBold48"
            >
              We crush your competitors, goals, and sales records - without the B.S.
            </Text>
            <Button className="cursor-pointer font-bold min-w-[214px] text-center text-sm tracking-[-0.28px] uppercase">
              Get free consultation
            </Button>
          </div>
        </>
      ) : (
        <>
          <Img
            className="md:h-auto w-full object-fill"
            src="images/img_andykelly0ev.png"
            alt="andykelly0ev"
          />
          <div className="max-w-[630px] absolute bottom-[6%] left-[6%] gap-5 px-10 sm:px-5 pb-8 pt-6 flex flex-col items-start justify-start bg-gradient">
          <Text
              className="capitalize leading-[100.00%] max-w-[556px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px]"
              size="txtInterBold48"
            >
              We crush your competitors, goals, and sales records - without the B.S.
            </Text>
            <Button className="cursor-pointer font-bold min-w-[214px] text-center text-sm tracking-[-0.28px] uppercase">
              Get free consultation
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
