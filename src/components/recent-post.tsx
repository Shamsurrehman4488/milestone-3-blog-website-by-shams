 import Image from "next/image"
 import Link from "next/link"
 import React from 'react';
 export default function Post(){
    return(
        <div className=" w-full h-auto lg:h-[900px] ">
    

    <div className="w-full lg:w-[1200px] space-y-8 lg:h-[600px] mx-auto">
    <h1 className="font-bold text-4xl text-center  mb-16">
    Latest Blog Posts
    </h1>
    
    <div className=" flex flex-col lg:flex-row gap-6 justify-center lg:justify-between  items-center">

   {/** post-1 */}
    <div className="w-[90%] lg:w-[380px]">
    <Link 
      href="https://science.nasa.gov/moon/"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/post.jpg"
          alt="img"
          fill
          className="w-[90%] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="absolute bottom-0 h-[50%] w-full bg-red-500 bg-opacity-30 p-2">
            <h2 className="text-white  text-xl font-sans  mb-2">
              {"THE DANGEROUS SIDE OF THE MOON "}
            </h2>
            <time className="text-white text-sm mb-2">
              {"Dec 12, 2021"}
            </time>
          </div>
        </div>
      </div>
    </Link>
    </div>

{/** post-2 */}

    <div className="w-[90%] lg:w-[380px]">
    <Link 
      href="https://www.designinblack.com/fillerama"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/post2.jpg"
          alt="img"
          fill
          className="w-[90%] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="absolute bottom-0 h-[50%] w-full  bg-red-500 bg-opacity-30 p-2">
            <h2 className="text-white text-xl font-bold mb-2">
              {"Dummy Content from Fillerama"}
            </h2>
            <time className="text-gray-300 text-sm mb-2">
              {"February 20, 2020"}
            </time>
          </div>
        </div>
      </div>
    </Link>
    </div>

{/** post-3 */}


<div className="w-[90%] lg:w-[380px]">
    <Link 
      href="https://www.imdb.com/list/ls073106849/"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/post3.jpg"
          alt="img"
          fill
          className="w-[90%] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="absolute bottom-0 h-[50%] w-full  bg-red-500 bg-opacity-30 p-2">
            <h2 className="text-white text-xl font-bold mb-2">
              {"Best Movies about Photography"}
            </h2>
            <time className="text-gray-300 text-sm mb-2">
              {"Dec 12, 2021"}
            </time>
          </div>
        </div>
      </div>
    </Link>
    </div>


    </div>


  
    <div className=" flex flex-col lg:flex-row gap-6 justify-center lg:justify-between items-center">

   {/** post-4 */}
    <div className="w-[90%] lg:w-[380px]">
    <Link 
      href="https://www.northshore.org/healthy-you/9-health-benefits-of-music/"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/post4.jpg"
          alt="img"
          fill
          className="w-[90%] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="absolute bottom-0 h-[50%] w-full  bg-red-500 bg-opacity-30 p-2">
            <h2 className="text-white text-xl font-bold mb-2">
              {"Why music is good for health"}
            </h2>
            <time className="text-gray-300 text-sm mb-2">
              {"may 10, 2020"}
            </time>
          </div>
        </div>
      </div>
    </Link>
    </div>

{/** post-5 */}

    <div className="w-[90%] lg:w-[380px]">
    <Link 
      href="https://www.britannica.com/place/K2"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/post5.jpg"
          alt="img"
          fill
          className="w-[90%] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="absolute bottom-0 h-[50%] w-full  bg-red-500 bg-opacity-30 p-2">
            <h2 className="text-white text-xl font-bold mb-2">
              {"K2, the world’s second highest peak "}
            </h2>
            <time className="text-gray-300 text-sm mb-2">
              {"may 12, 2020"}
            </time>
          </div>
        </div>
      </div>
    </Link>
    </div>

{/** post-6 */}


<div className="w-[90%] lg:w-[380px]">
    <Link 
      href="https://www.britannica.com/place/Amazon-Rainforest"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/post6.jpg"
          alt="img"
          fill
          className="w-[90%] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="absolute bottom-0 h-[50%] w-full  bg-red-500 bg-opacity-30 p-2">
            <h2 className="text-white text-xl font-bold mb-2">
              {"How large is the Amazon Rainforest?"}
            </h2>
            <time className="text-gray-300 text-sm mb-2">
              {"may 12, 2020"}
            </time>
          </div>
        </div>
      </div>
    </Link>
    </div>






    </div>




    <div className=" flex flex-col lg:flex-row gap-6 justify-center lg:justify-between items-center">

   {/** post-7 */}
    <div className="w-[90%] lg:w-[380px]">
    <Link 
      href="https://doam.gov.pk/sites/4607"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/post7.jpg"
          alt="img"
          fill
          className="w-[90%] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="absolute bottom-0 h-[50%] w-full  bg-red-500 bg-opacity-30 p-2">
            <h2 className="text-white text-xl font-bold mb-2">
              {"BALA-HISSAR FORT IN PESHAWAR KPK"}
            </h2>
            <time className="text-gray-300 text-sm mb-2">
              {"may 10, 2020"}
            </time>
          </div>
        </div>
      </div>
    </Link>
    </div>

{/** post-8 */}

    <div className="w-[90%] lg:w-[380px]">
    <Link 
      href="https://www.britannica.com/topic/Titanic"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/post8.jpeg"
          alt="img"
          fill
          className="w-[90%] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="absolute bottom-0 h-[50%] w-full  bg-red-500 bg-opacity-30 p-2">
            <h2 className="text-white text-xl font-bold mb-2">
              {"Where is the wreck of the Titanic? "}
            </h2>
            <time className="text-gray-300 text-sm mb-2">
              {"may 12, 2020"}
            </time>
          </div>
        </div>
      </div>
    </Link>
    </div>

{/** post-9 */}


<div className="w-[90%] lg:w-[380px]">
    <Link 
      href="https://www.britannica.com/topic/Great-Wall-of-China"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/post11.jpg"
          alt="img"
          fill
          className="w-[90%] transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="absolute bottom-0 h-[50%] w-full  bg-red-500 bg-opacity-30 p-2">
            <h2 className="text-white text-xl font-bold mb-2">
              {"Why was the Great Wall of China built?"}
            </h2>
            <time className="text-gray-300 text-sm mb-2">
              {"may 12, 2020"}
            </time>
          </div>
        </div>
      </div>
    </Link>
    </div>






    </div>


        </div>

        </div>
    )
 }