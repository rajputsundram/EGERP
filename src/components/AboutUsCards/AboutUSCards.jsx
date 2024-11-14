import React from 'react'
import Image from 'next/image';

function AboutUSCards({OurStory}) {
  return (
    <>
    <div className="flex items-center justify-center gap-8 flex-wrap">
          {OurStory.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className="h-[310px] p-5 w-[380px] sm:w-[580px] border-[3px] rounded-lg border-black flex flex-col justify-center items-center text-center md:w-[320px] md:h-[370px] lg:h-[350px] lg:w-[290px] xl:w-[360px] xl:h-[420px]"
                >
                  <h1 className="text-[24px] m-2 font-bold md:text-[22px] lg:text-[22px] xl:text-[28px]">{items.title}</h1>
                  <Image
                    src={items.img}
                    width={1400}
                    height={1600}
                    alt="logo"
                    className='mb-[10px] w-[80px] h-[80px] sm:w-[140px] sm:h-[160px] md:w-[90px] md:h-[90px] lg:w-[80px] lg:h-[80px] xl:w-[110px] xl:h-[110px]'
                  ></Image>
                  <p className=" my-2 text-[15px] sm:text-[18px] shadow-sm sm:font-normal md:text-[16px] lg:text-[16px] xl:text-[18px]">{items.desc}</p>
                </div>
              </>
            );
          })}
        </div>
    </>
  )
}

export default AboutUSCards