import React from 'react';
import Btn from '../Btn';
import { Icon } from '@iconify/react/dist/iconify.js';
import Accordion from './Accordion';

const Support = () => {
  return (
    <section className="max-w-8xl mx-auto py-20 px-7 lg:px-25 bg-light">
      {/* Flex section */}
      <div className="flex flex-col md:flex-row space-y-5 justify-between xl:px-20">
        {/* Text section */}
        <div className="flex flex-row md:flex-col items-center md:items-start justify-between ">
          <h1 className="text-xl md:text-4xl mt-3 md:max-w-[290px]  leading-tight">
            Real Support from Humans
          </h1>
          <Btn className="flex items-center justify-between bg-white rounded-sm py-3 px-4 w-fit text-gray-700 text-sm font-medium cursor-pointer space-x-2">
            <span className="whitespace-nowrap">Contact Support</span>
            <Icon
              icon="wi:direction-up-right"
              height="20px"
              width="20px"
              className=""
            />
          </Btn>
        </div>

        {/* Accordion section */}
        <div className="p-4 ">
          <Accordion
            id="01"
            title="How does Flow's invoice financing work?"
            content=" Flow advances payments on your invoices, so suppliers get paid
          instantly while buyers enjoy flexible terms. We handle collections and
          take on all credit risk."
          />
          <Accordion
            id="02"
            title="What industries can use flow financing solution?"
            content=" Flow advances payments on your invoices, so suppliers get paid
          instantly while buyers enjoy flexible terms. We handle collections and
          take on all credit risk."
          />
          <Accordion
            id="03"
            title="Do i need to take approval from the supplier?"
            content=" Flow advances payments on your invoices, so suppliers get paid
          instantly while buyers enjoy flexible terms. We handle collections and
          take on all credit risk."
          />
        </div>
      </div>
    </section>
  );
};

export default Support;
