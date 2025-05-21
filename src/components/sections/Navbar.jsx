import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import Menu from '../../assets/menu_icon.png';
import Close from '../../assets/close_icon.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Btn from '../Btn';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleDropdown = (section) => {
    setOpenDropdown(prev => (prev === section ? null : section));
  }

  const sections = [
    { title: 'Product', items: ['Invoice Financing', 'Payment Processing', 'Risk Management', 'Checkout API'] },
    { title: 'Solutions', items: ['Marketplaces', 'Saas', 'Enterprises'] },
    { title: 'Company', items: ['About Us', 'Careers', 'Contact'] },
    { title: 'Resources', items: ['Customers', 'Resources', 'Blog', 'Press'] },
  ];

  return (
    <div className="px-4 py-4">
      {/* Mobile screen view */}
      <div className="mobile-header-container flex justify-between lg:hidden">

        {/* logo */}
        <div className="logo-container flex items-center gap-1">
          <div className="w-6">
            <img src={Logo} alt="logo" />
          </div>
          <h1 className="font-bold text-[18px] md:text-[20px] text-[#204e4d]">Flow</h1>
        </div>
        <div className="w-8 md:w-10">
          <img src={Menu} alt="menu" className="cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Side bar */}
        <div className={`fixed top-0 right-0 w-[60%] h-auto px-4 py-5 bg-white z-50 shadow-lg transition-transform transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="w-8">
            <img src={Close} alt="close" className="cursor-pointer" onClick={toggleMenu} />
          </div>

          <div className="sidebar-items flex flex-col pl-5 mt-10">
            {sections.map((section) => (
              <div key={section.title}>
                <div className="flex gap-2 items-center">
                  <p className="cursor-pointer hover:bg-[#77f7d3] hover:pl-5 hover:w-32 hover:rounded-lg my-2" onClick={() => handleDropdown(section.title)}>{section.title}</p>
                  <ChevronDownIcon onClick={() => handleDropdown(section.title)}
                    className={`w-3 transition-transform duration-300 mr-5 ${openDropdown === section.title ? 'rotate-180' : ''}`}
                  />
                </div>
                {openDropdown === section.title && (<ul className="pl-4 text-[15px] space-y-2">
                  {section.items.map(item => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>)}
              </div>
            ))}
            <p className="my-2 cursor-pointer hover:bg-[#77f7d3] hover:pl-5 hover:w-32 hover:rounded-lg">Pricing</p>
          </div>
          <div className="flex flex-col">
            <Btn className="border-1 mt-8 font-medium text-[15px] border-gray-300 cursor-pointer hover:bg-gray-100">Sign In</Btn>
            <Btn className="border-0 mt-2 text-[15px] font-medium bg-[#77f7d3] cursor-pointer hover:bg-[#83e7cb]">Get Started</Btn>
          </div>
        </div>
      </div>

      {/* Desktop Screen view*/}
      <div className="desktop-nav lg:flex justify-between items-center hidden">
        <div className="logo-container flex items-center gap-1">
          <div className="w-6 ">
            <img src={Logo} alt="logo" />
          </div>
          <h1 className="font-bold text-[20px] text-[#204e4d]">Flow</h1>
        </div>
        <div>
          <div className="flex items-center gap-2">
            {sections.map((section) => (
              <div key={section.title} className="relative" onMouseEnter={() => setOpenDropdown(section.title)} onMouseLeave={() => setOpenDropdown(null)}>
                <div className="flex gap-2 items-center">
                  <p className="cursor-pointer hover:text-[#204e4d]">{section.title}</p>
                  <ChevronDownIcon
                    className={`w-3 transition-transform duration-300 cursor-pointer mr-5 ${openDropdown === section.title ? 'rotate-180' : ''}`}
                  />
                </div>
                {openDropdown === section.title && (<ul className="absolute left-0 mt-1 w-auto bg-white shadow-md rounded-md text-[14px] hover:block z-50">
                  {section.items.map(item => (
                    <li key={item} className="px-3 py-2 hover:bg-[#77f7d3] cursor-pointer">{item}</li>
                  ))}
                </ul>)}
              </div>
            ))}
            <p className="my-2 cursor-pointer hover:text-[#204e4d]">Pricing</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Btn className="border-1 font-medium text-[15px] border-gray-300 cursor-pointer">Sign In</Btn>
          <Btn className="border-0 text-[15px] font-medium bg-[#77f7d3] cursor-pointer">Get Started</Btn>
        </div>
      </div>
    </div>
  )
}

export default Navbar