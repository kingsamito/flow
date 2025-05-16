import React from 'react';
import Btn from '../Btn';
import logo from '../../assets/logo.png';
import { Icon } from '@iconify/react/dist/iconify.js';

const ClickPay = () => {
  return (
    <section className="max-w-8xl mx-auto py-15 px-7 lg:px-25">
      {/* image div */}
      <div className="relative bg-[url('/clickpay.png')] h-50 md:h-100  bg-cover bg-center">
        <div className="text-white text-center md:text-left py-7 md:py-0 p-5 md:px-20 md:pt-26 space-y-3 md:space-y-5 ">
          <h1 className="font-medium text-lg md:text-6xl tracking-tight">
            Click. Pay. Done.
          </h1>
          <p className="text-sm md:text-lg text-white  md:text-neutral-400 tracking-wider">
            Getting started with flow is easy — just like our payments
          </p>
          <Btn className="bg-primary md:mt-4 py-3 w-fit text-black text-sm font-medium cursor-pointer whitespace-nowrap">
            Getting Started
          </Btn>
        </div>
      </div>

      {/* Socials div */}
      <div className="flex justify-between items-center py-5 px-5 mt-5">
        {/* Logo */}
        <div className="flex items-center space-x-1.5">
          <img src={logo} className="w-8 h-7" alt="" />
          <h1 className="text-3xl font-bold text-secondary">Flow</h1>
        </div>

        {/* socials */}
        <div className="flex space-x-2">
          <div className="bg-primary p-2">
            <Icon icon="line-md:instagram" />
          </div>
          <div className="bg-primary p-2">
            <Icon icon="mingcute:linkedin-line" />
          </div>
          <div className="bg-primary p-2">
            <Icon icon="ri:twitter-x-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClickPay;
