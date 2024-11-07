import React from 'react';

function BlogpostCards({ Smallblogs }) {
  return (
    <>
      <div className="flex justify-center flex-wrap flex-grow mb-7">
        <div className="flex justify-center flex-start flex-wrap gap-5 mb-2">
          {Smallblogs.map((item) => (
            <a href={item.link} className="cursor-pointer" key={item.id}>
              <div className="border-solid border-gray-900 border-[1px] rounded-3xl h-[250px] w-[180px] scale-95 bg-gradient-to-t from-indigo-500 via-indigo-300 to-indigo-100  hover:bg-teal-800 hover:scale-100 transition-transform duration-300 border-gray flex flex-col justify-start items-center text-center  hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] 
              md:h-[270px]">
                <img
                  src={item.img}
                  width={1200}
                  height={600}
                  alt="Blog"
                  className="h-[300px] w-[280px] rounded-t-3xl md:h-[350px]"
                />
                <div className="flex flex-col justify-start items-center text-center h-full rounded-b-3xl  ">
                  <p className="text-sm font-bold text-wrap px-5 mt-4 text-center overflow-hidden text-ellipsis whitespace-nowrap md:text-md ">
                    {item.desc}
                  </p>
                  <div className="flex flex-row">
                    <h5 className="font-bold p-2 text-white text-center ">
                      Read More
                    </h5>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogpostCards;
