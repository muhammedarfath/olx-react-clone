import React from 'react';
import { LuInstagram } from "react-icons/lu";
import { BiLogoFacebook } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import { MdSlowMotionVideo } from "react-icons/md";

function Footer() {
  return (
    <footer className='bg-[#002F3408]'>
      <div className='container mx-auto px-4 py-8'>
      <div className='hidden lg:flex lg:flex-row justify-between items-center'>
          <div className='lg:flex items-center mb-4'>
              <img src="https://statics.olx.in/external/base/img/phone-app.webp" alt="" />
              <div className='text-[#002f34] ml-4'>
              <h1 className='font-bold text-[34px] mb-3'>TRY THE OLX APP</h1>
              <span>Buy, sell and find just about anything using the <br /> app on your mobile.</span>
              </div>
          </div>
          <div className='h-[136px] bg-[#002f34] w-px m-3'></div>
          <div className='text-black  flex flex-col items-start'>
              <p className='font-bold text-sm mb-3'>GET YOUR APP TODAY</p>
              <div className='flex space-x-2 '>
              <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" className='h-7' alt="" />
              <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" className='h-7' alt="" />
              </div>
          </div>
      </div>


        <div className='md:flex md:justify-between md:mt-8'>
          <div className='text-black mr-4'>
            <p className='font-bold text-sm mb-3'>POPULAR LOCATIONS</p>
            <ul className='text-[13px] text-gray-500'>
              <li>New York</li>
              <li>London</li>
              <li>Paris</li>
              <li>Tokyo</li>
            </ul>
          </div>
          <div className='text-black mr-4'>
            <p className='font-bold text-sm mb-3'>TRENDING LOCATIONS</p>
            <ul className='text-[13px] text-gray-500'>
              <li>Los Angeles</li>
              <li>Berlin</li>
              <li>Rome</li>
              <li>Beijing</li>
            </ul>
          </div>
          <div className='text-black mr-4'>
            <p className='font-bold text-sm mb-3'>ABOUT US</p>
            <ul className='text-[13px] text-gray-500'>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='text-black mr-4'>
            <p className='font-bold text-sm mb-3'>OLX</p>
            <ul className='text-[13px] text-gray-500'>
              <li>About OLX</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className='text-black '>
            <p className='font-semibold'>FOLLOW US</p>
            <div className='flex gap-3 mt-3 mb-8'>
            <LuInstagram className='text-[#002f34] w-7 h-6'/>
            <BiLogoFacebook className='text-[#002f34] w-7 h-6'/>
            <SiTwitter className='text-[#002f34] w-7 h-6'/>
            <MdSlowMotionVideo className='text-[#002f34] w-7 h-6'/>
            </div>
            <div className='flex '>
              <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="" className="h-8" />
              <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="" className="h-8" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-teal-900 text-[13px] text-white py-4 px-6">
        <div className='container mx-auto'>
          <div className='flex lg:justify-between'>
            <p className='hidden lg:block'>Help - Sitemap</p>
            <p>All rights reserved © 2006-2024 OLX</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


