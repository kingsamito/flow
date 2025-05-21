import React from 'react'
import Logo from '../../assets/logo.png';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import X from '../../assets/x.png';

const Footer = () => {
  return (
    <div className="mt-10 px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="logo-container flex items-center gap-1">
          <div className="w-6">
            <img src={Logo} alt="logo" />
          </div>
          <h1 className="font-bold text-[18px] md:text-[20px] text-[#204e4d]">Flow</h1>
        </div>

        {/* Social media icons */}
        <div className="social-media-icons flex gap-2">
          <div className="w-6 bg-[#77f7d3] flex justify-center h-6 items-center">
            <FaInstagram/>
          </div>
          <div className="w-6 bg-[#77f7d3] flex justify-center h-6 items-center">
            <FaLinkedin />
          </div>
          <div className="w-6 bg-[#77f7d3] flex justify-center items-center h-6">
            <div className="w-3">
              <img src={X} alt="X"/>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Products */}
        <div className="products">
          <p className="text-gray-500 mb-5">Products</p>
          <div className="space-y-3">
            <p>Invoice Financing</p>
            <p>Payment Processing</p>
            <p>Risk Management</p>
            <p>Checkout API</p>
          </div>
        </div>

        {/* Solutions */}
        <div className="solutions">
          <p className="text-gray-500  mb-5">Solutions</p>
          <div className="space-y-3">
            <p>Marketplaces</p>
            <p>SaaS</p>
            <p>Enterprises</p>
          </div>
        </div>

        {/* Developers */}
        <div className="developers">
          <p className="text-gray-500  mb-5">Developers</p>
          <div className="space-y-3">  
            <p>Guides</p>
            <p>API Reference</p>
            <p>Changelog</p>
          </div>
        </div>

        {/* Resources */}
        <div className="resources">
          <p className="text-gray-500  mb-5">Resources</p>
          <div className="space-y-3">
            <p>Customers</p>
            <p>Resources</p>
            <p>Blog</p>
            <p>Press</p>
          </div>
        </div>

        {/* The Company */}
        <div className="the company md:mt-4 lg:mt-0">
          <p className="text-gray-500  mb-5">The Company</p>
          <div className="space-y-3">  
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>
      </div>

      <div className="footer-end text-sm mt-10 md:flex md:justify-between">
        <p>&copy; Copyright 2025 Flow. All rights reserved.</p>
        <div className="md:flex md:gap-8">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer