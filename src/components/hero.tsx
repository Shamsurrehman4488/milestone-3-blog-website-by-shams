import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="max-w-7xl   md:w-[1300px] md:h-[500px] mx-auto px-4  sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0 gap-8">
        {/* Left div */}
        <div className="w-full  lg:w-1/2 space-y-6 md:space-y-8 ">
          <h1 className="  text-4xl md:text-5xl lg:text-6xl font-bold md:font-extrabold text-center md:text-left  text-slate-800 leading-tight">
          Explore the <br /> World of Blogging 
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Create stunning content, connect with readers, and take your writing to the next level with our cutting-edge blogging platform.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start  gap-4 pt-4">
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              Get in touch
              <svg 
                className="ml-2 w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[500px] md:mt-4 ">
          <div className="relative aspect-[4/3] w-full  rounded-2xl overflow-hidden">
            <Image
              src="/images/hero3.jpeg"
              alt="AI"
              fill
              className="w-full "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;