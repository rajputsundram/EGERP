import React from 'react'

function BlogpostCards({ Smallblogs }) {
  return (
    <>
    <div className="flex justify-center  flex-wrap flex-grow mb-7 ">
            <div className="flex justify-center flex-start flex-wrap gap-9 mb-7">
              {Smallblogs.map((item) => (
                <a href={item.link} className="cursor-pointer" key={item.id}>
                  <div className="border-[2px] rounded-3xl h-[350px] w-[250px] border-gray flex flex-col justify-start items-center text-center hover:shadow-md">
                    <img src={item.img} width={1200} height={200} alt="Blog" className="h-[150px] w-[300px] rounded-t-3xl" />
                    <p className="text-lg font-bold text-wrap my-5 px-5 text-left overflow-hidden text-ellipsis whitespace-nowrap">{item.desc}</p>
                    <div className="flex flex-row">
                      <h5 className="font-bold text-green-500 text-left px-5 ">Read More</h5>
                    </div>
                  </div>
                </a>
              ))}
            </div>
              </div>
    </>
  )}
export default BlogpostCards
