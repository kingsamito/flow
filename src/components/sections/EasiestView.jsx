import React from 'react';
import { Icon } from '@iconify/react';
import Btn from '../Btn';

const EasiestView = () => {
  return (
    <section className="max-w-8xl mx-auto py-5 px-7 lg:px-25">
      {/* Partner section */}
      <div className="flex flex-col md:flex-row space-y-3 py-2 justify-between items-center text-gray-700">
        <p className="text-sm font-medium leading-tight">
          <span className="block md:hidden text-lg">
            More than 100+ companies partners
          </span>
          <span className="hidden md:block">More than 100+</span>
          <span className="hidden md:block">companies partners</span>
        </p>

        <div className="flex space-x-1.5 items-center md:text-sm lg:text-lg lg:font-bold md:font-medium">
          <Icon icon="fa6-brands:hubspot" width="30px" height="30px" />
          <h2>Hubspot</h2>
        </div>

        <div className="flex space-x-1.5 items-center md:text-sm lg:text-lg lg:font-bold md:font-medium">
          <Icon icon="fa6-brands:dropbox" width="30px" height="30px" />
          <h2>Dropbox</h2>
        </div>

        <div className="flex space-x-1.5 items-center md:text-sm lg:text-lg lg:font-bold md:font-medium">
          <Icon icon="fa6-brands:square-bluesky" width="30px" height="30px" />
          <h2>Square</h2>
        </div>

        <div className="flex space-x-1.5 items-center md:text-sm lg:text-lg lg:font-bold md:font-medium">
          <Icon icon="fa6-brands:intercom" width="30px" height="30px" />
          <h2>Intercom</h2>
        </div>

        <div className="flex space-x-1.5 items-center md:text-sm lg:text-lg lg:font-bold md:font-medium">
          <Icon
            icon="fa-brands:google-plus-square"
            width="30px"
            height="30px"
          />
          <h2>Google</h2>
        </div>
      </div>

      {/* Easiest View section */}
      <div className="py-15 flex flex-col md:flex-row space-y-5 justify-between xl:px-20 ">
        {/* Text section */}
        <div className="flex flex-row md:flex-col justify-between ">
          <h1 className="text-xl md:text-4xl md:max-w-[290px] mx-auto leading-tight">
            The Easiest Way to Move Money
          </h1>
          <Btn className="bg-primary rounded-sm py-3 w-35 text-gray-700 text-sm font-medium cursor-pointer">
            Speak to sales
          </Btn>
        </div>

        {/* Content section */}
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto scroll-snap-x">
          <div className="min-w-[380px] md:w-full p-6 flex space-x-2 bg-amber-100 rounded-md scroll-snap-align-start">
            <Icon icon="fa-solid:code" className="mt-2 text-gray-600 text-lg" />
            <div>
              <h1 className="mt-1 mb-2 text-md font-medium text-gray-900">
                We Speak Software
              </h1>
              <p className="max-w-[390px] text-sm text-gray-600 font-medium">
                Our B2B payment API seamlessly, offering a customizable,
                white-labeled experience for your brand.
              </p>
            </div>
          </div>

          <div className="min-w-[380px] md:w-full p-6 flex space-x-2 bg-lime-50 rounded-md scroll-snap-align-start">
            <Icon
              icon="material-symbols:dashboard-customize-outline-rounded"
              className="mt-2 text-gray-600 text-lg"
            />
            <div>
              <h1 className="mt-1 mb-2 text-md font-medium text-gray-900">
                Simplify Your Workflow
              </h1>
              <p className="max-w-[390px] text-sm text-gray-600 font-medium">
                Handle payment, financing and risk management in one place—so
                you can focus on your business.
              </p>
            </div>
          </div>

          <div className="min-w-[380px] md:w-full p-6 flex space-x-2 bg-purple-50 rounded-md scroll-snap-align-start">
            <Icon
              icon="fa6-solid:headset"
              className="mt-2 text-gray-600 text-lg"
            />
            <div>
              <h1 className="mt-1 mb-2 text-md font-medium text-gray-900">
                Support That Grows With You
              </h1>
              <p className="max-w-[390px] text-sm text-gray-600 font-medium">
                More than support—we're your partner in innovation and helping
                your business grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasiestView;
