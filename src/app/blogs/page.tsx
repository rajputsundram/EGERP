'use client'

import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

const page = () => {
  return (
   <>
   <div className='h-[900px]'>
    {/* heading */}

    <div className='flex mt-20  h-96 justify-center items-center'>

{/* text section */}
      <div className='  w-[50%] items-start  h-full justify-center flex  '>
        <div className='  h-[300px] w-[70%] flex items-center'>
          <h1 className='  font-poppins   font-bold text-[50px] '>Welcome! Dive into my 
     <span className='text-red-500'>     <Typewriter
      options={{
        strings: ['Financial Blogs',"Business Blogs","Travel Blogs","Finance Blogs","Entertainment Blogs","Lifestyle Blogs","Health Blogs"],
        autoStart: true,
        loop: true,
      }}
    /></span>
    </h1>
          </div>

      </div>
{/* image section */}
      <div className='flex justify-start items-start   w-[50%] '>
        <img src={'https://www.impactbnd.com/hs-fs/hubfs/social-suggested-images/5_Blog_Layout_Best_Practices_From_2016-1.jpg?length=1200&name=5_Blog_Layout_Best_Practices_From_2016-1.jpg'}    className='rounded-3xl w-[80%] h-[400px] ' alt=''/>
      </div>

   </div>


   </div>
   </>
  )
}

export default page
