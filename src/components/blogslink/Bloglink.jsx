import React from 'react';
import Link from 'next/link';

function Bloglink({ blogs }) {
  return (
    <div className="flex flex-row justify-center items-center m-[80px] gap-8 flex-wrap">
      {Object.keys(blogs).map((category) => (
        <div key={category} className='border-solid border-[2px] border-stone-900 rounded-3xl w-[350px] h-[680px] flex justify-center items-center flex-col gap-4 hover:shadow-lg'>

          <div className="mt-5 rounded-lg text-3xl font-semibold mb-4 bg-gray-400 p-3 w-[260px] h-[70px] text-center shadow-md">
            <h3>{category}</h3>
          </div>

          <div className="flex justify-center flex-row flex-wrap flex-grow gap-1">
            <div className="flex justify-center flex-row flex-wrap gap-4  ">
              {blogs[category].map((item) => (
                <a href={item.link} className="cursor-pointer" key={item.id}>
                  <div className="border-[2px] rounded-lg h-[230px] w-[150px] border-gray flex flex-col justify-start items-start text-start hover:shadow-md ">
                    <img src={item.img} width={1500} height={120} alt="Blog" className="h-[100px] w-[200px] rounded-md" />
                    <p className="text-md font-bold text-wrap mt-2  overflow-auto no-scrollbar text-ellipsis whitespace-nowrap px-2">{item.desc}</p>
                    <div className="flex flex-row">
                      <Link href={"./"}>
                      <h5 className="font-bold text-green-500 text-sm mt-1 px-2">Read More</h5>
                      </Link>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className=''>
            <button className="bg-red-500 hover:bg-red-600  mb-6 w-[170px] h-[50px] text-white font-bold rounded-lg">All {category} Posts</button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Bloglink;
