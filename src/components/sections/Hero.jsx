import React from 'react';
import heroImg from '../../assets/imgs/hero.png';
import Money from '../../assets/imgs/money.png';
import Btn from '../../components/Btn';

const Hero = () => {
  return (
    <div className="bg-[#0D131B] min-h-auto flex flex-col md:flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12">

      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-6 text-left lg:pt-0 ">
        <div className='flex items-center gap-[10px] bg-[#363b41] px-3 py-2 rounded text-white text-sm tracking-wide w-max'>
          <img src={Money} alt="" className='w-[20px]' />
          INVOICE FINANCING
        </div>

        <h1 className="text-white text-[40px] lg:text-[55px] leading-tight font-light font-[poppins]">
          Power Your Product with Built-In Invoice Financing
        </h1>

        <p className="text-gray-400 text-lg">
          Boost your product with seamless invoice financing. <br />
          Integrate with one API and enhance your checkout experience effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Btn className='bg-[#2EF4A4] text-black font-regular'>
            Get Started
          </Btn>

          <Btn className='bg-[#2E2F30] text-white font-regular'>
            Speak to Sales
          </Btn>
        </div>
      </div>

      {/* Right Section – Image */}
      <div className="hidden lg:flex w-1/2 justify-center mt-10 lg:mt-0">
        <img src={heroImg} alt="Invoice Preview" className="max-w-[500px] h-auto" />
      </div>

    </div>
  );
};

export default Hero;
