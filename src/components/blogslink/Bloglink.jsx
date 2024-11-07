import React from 'react';
import Link from 'next/link';

function Bloglink({ blogs }) {
  return (
    <div className="flex flex-row justify-center items-center m-[40px] gap-8 flex-wrap md:m-[60px] md:gap-12">
      {Object.keys(blogs).map((category) => (
        <div key={category} className='border-solid border-[2px] border-stone-900 rounded-3xl w-[350px] h-[595px] flex justify-center items-center flex-col gap-4 p-3 sm:p-1 md:w-[550px] md:h-[740px] lg:w-[370px] lg:h-[690px] hover:shadow-2xl shadow-blue-500/20  '>

          <div className="mt-5 rounded-lg text-xl font-bold mb-4 bg-gray-200 p-3 w-[180px] h-[60px] text-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:w-[250px] sm:h-[60px] sm:text-[25px] ">
            <h3>{category}</h3>
          </div>

          <div className="flex justify-center flex-row flex-wrap flex-grow gap-1">
            <div className="flex justify-center flex-row flex-wrap gap-4  ">
              {blogs[category].map((item) => (
                <Link href={item.link} className="cursor-pointer" key={item.id}>
                  <div className="border-[2px] rounded-xl h-[200px] w-[150px]
                       bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 border-gray flex flex-col justify-start items-center text-center sm:w-[150px] sm:h-[220px]   md:w-[230px] md:h-[260px] lg:w-[160px] lg:h-[240px] hover:scale-105 transition-transform duration-300">
                    <img src={item.img} width={1500} height={120} alt="Blog" className="h-[100px] w-[200px] rounded-t-md sm:h-[120px] md:w-[290px] md:h-[130px] lg:w-[200px] lg:h-[110px] " />
                    <p className="text-sm text-gray-200 text-wrap mt-2 px-1 overflow-hidden text-ellipsis whitespace-nowrap  sm:text-[13px] md:mx-auto md:pt-2 md:text-[14px] md:font-bold  lg:text-sm lg:mx-1">{item.desc}</p>
                    <div className="flex flex-row">
                    <Link href={"./"}>
                      <h5 className="font-bold text-white text-sm mt-1 sm:text-[12px] md:mt-3 md:text-md lg:text-[15px] md:pb-2 ">Read More</h5>
                    </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <button className="bg-red-500 hover:bg-red-600 mb-6 w-[180px] h-[40px] text-white text font-medium rounded-lg md:w-[190px] md:h-[60px] md:text-lg lg:w-[160px] lg:h-[60px] lg:text-[15px]">All {category} Posts</button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Bloglink;
