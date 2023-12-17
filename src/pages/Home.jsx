import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import { Navbar } from "components/Navbar/Navbar";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 775);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <=375);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start w-full">
        <Navbar />
        <div className="flex flex-col items-center justify-start w-full">
          <Header />
        </div>

        {/* First Section */}
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row md:gap-10 gap-[108px]'} items-center justify-between max-w-[1064px] mt-20 mx-auto md:px-5 w-full`}>
          <div className={`md:flex-1 ${isMobile ? 'max-w-[414px] w-full' : 'max-w-[414px] md:w-full'}`}>
            <Img
              className="h-auto object-cover w-full md:w-full"
              src="images/img_image2.png"
              alt="imageTwo"
            />
          </div>

          <div className={`flex sm:flex-1 flex-col gap-5 ${isMobile ? 'items-center' : 'items-start'} items-start justify-start w-[542px] sm:w-full`}>
            <div className="flex flex-col font-poppins items-start justify-start w-auto sm:w-full">
            <Text
                className={`sm:text-[23px] md:text-[25px] text-[27px] text-deep_purple-500 tracking-[0.40px] ${isMobile ? 'text-center' : 'w-auto'}`}
                size="txtPoppinsSemiBold27"
              >
                Web & Mobile App Development
              </Text>
            </div>
            <Text
             className={`max-w-[542px] md:max-w-full text-base text-black-900 ${isMobile ? 'text-center' : 'w-auto'}`}
             size="txtInterRegular16"
            >
              Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </Text>
            <Button
              className={`cursor-pointer font-bold font-inter min-w-[129px] text-sm tracking-[-0.28px] uppercase ${isMobile ? 'text-center' : 'w-auto'}`}
            >
              LEARN MORE
            </Button>
          </div>
        </div>

        {/* Second Section */}
        <div className={`flex ${isMobile ? 'flex-col-reverse' : 'flex-row md:gap-10 gap-[108px]'} items-center justify-between max-w-[1064px] mt-20 mx-auto md:px-5 w-full`}>
        <div className={`flex sm:flex-1 flex-col gap-5 ${isMobile ? 'items-center' : 'items-start'} items-start justify-start w-[542px] sm:w-full`}>
            <div className="flex flex-col font-poppins items-start justify-start w-auto sm:w-full">
          
              <Text
                className={`sm:text-[23px] md:text-[25px] text-[27px] text-deep_purple-500 tracking-[0.40px] ${isMobile ? 'text-center' : 'w-auto'}`}
                size="txtPoppinsSemiBold27"
              >
                 Digital Strategy Consulting
              </Text>
            </div>
            <Text
              className={`max-w-[542px] md:max-w-full text-base text-black-900 ${isMobile ? 'text-center' : 'w-auto'}`}
              size="txtInterRegular16"
            >
              Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation, and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </Text>
            <Button className="cursor-pointer font-bold font-inter min-w-[129px] text-center text-sm tracking-[-0.28px] uppercase">
              LEARN MORE
            </Button>
          </div>
          <div className={`md:flex-1 ${isMobile ? 'max-w-[414px] w-full' : 'max-w-[414px] md:w-full'}`}>
            <Img
              className="h-auto object-cover w-full md:w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
