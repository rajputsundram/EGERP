
'use client'
import React from 'react'

import { usePathname } from 'next/navigation'
import Link from "next/link"
// import {CiMenuFries} from 'react-icons/ci'

const links=[
    {name:"Home",path:"/" },
    {name:"Services",path:"/services" },
    {name:"Solutions",path:"/solutions" },
    {name:"About us",path:"/aboutus" },
    {name:"Blogs",path:"/Blogs" },
    {name:"ContactUs",path:"/contactus" },
   


   
]
function MobileNav() {
  
    const pathname=usePathname();
  return (
  <div className="">
    <div className='flex mb-6 mt-1 text-center justify-center items-center'>
  
    <div className='flex justify-center items-center'>
        {/* <CiMenuFries className='mx-10  text-[32px] ' ></CiMenuFries> */}
    </div>
    </div>
    <div className="flex flex-col ">
        <nav className='flex flex-col justify-center items-center gap-6'>
            {links.map((link,index)=>{
            return <Link href={link.path} key={index} className={`${link.path===pathname&&" border-b-2 border-blue-800"} text-xl capitalize hover:text-blue-800 transition-all duration-500`}>{link.name}</Link>
        })}</nav>
    </div>
  </div>
  )
}

export default MobileNav
