import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

const BlogTypeWriter = () => {
  return (
    <>
    <div className=' mb-16 '>
     {/* heading */}
 
     <div className='flex sm:flex-row flex-col  h-full w-full  mt-20  justify-center items-center'>
 
 {/* text section */}
       <div className='  sm:w-[50%] w-[100%] sm:items-start  sm:h-full h-[150px] justify-center flex '>
         <div className='  sm:h-[300px] sm:w-[70%] w-full  flex items-center justify-center'>
           <h1 className='  font-poppins   font-bold sm:text-[50px]  text-[30px] '>Welcome! Dive into my 
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
       <div className='flex justify-start items-start   sm:w-[50%] w-[340px] '>
         <img src={'https://www.impactbnd.com/hs-fs/hubfs/social-suggested-images/5_Blog_Layout_Best_Practices_From_2016-1.jpg?length=1200&name=5_Blog_Layout_Best_Practices_From_2016-1.jpg'}    className='rounded-3xl sm:w-[80%] w-[100%] sm:h-[400px] h-[200px] ' alt=''/>
       </div>
 
    </div>
 
 
    </div>
    </>
   )
}

export default BlogTypeWriter
