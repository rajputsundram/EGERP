'use client'

import Link from "next/link"

import { FaLock } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import {  usePathname } from 'next/navigation';



import Image from "next/image";

const Navbar=()=>{
    const pathname=usePathname();

    const links=[
        {name:"Home",path:"/" },
        {name:"Services",path:"/services" },
        {name:"Solutions",path:"/solutions" },
        {name:"About us",path:"/aboutus" },
        {name:"Blogs",path:"/Blogs" },
        {name:"ContactUs",path:"/contactus" },
       


       
    ]
   
    return(<>
  
    <div className="flex h-32 items-center  justify-between">

  {/* logo */}

  <Link href={"/"} className="flex  justify-center items-center ">
  <div className=" ml-24 flex"><Image src="/images/logo.png" width={300} height={500} alt="logo"/></div>

  </Link>

    {/* nav links */}

    <nav className='flex gap-8  max-w-[700px] '>
      {
        links.map((link,index)=>{
          return<Link href={link.path} key={index} className={`${link.path===pathname && " border-b-2  border-red-600 "} capitalize font-semibold text-xl hover:text-red-600 transition all hover:border-b-2 border-red-600 `}>{link.name}</Link>
        })
      }
    </nav>

{/* login sign up buttons */}
    <div className="mr-[100px] flex gap-4">
        <div className="w-[80px] gap-1 border  hover:bg-red-700  bg-red-500 p-1 flex text-white justify-center items-center h-[42px] rounded-[6px]">
            <FaLock/>
<Link href={"/login"} className="text-[16px]  font-medium ">Login</Link>
</div>    
 <div className="w-[80px] gap-1 border border-red-800 bg-red-500 hover:bg-red-700 text-white flex justify-center items-center h-[42px] p-1 rounded-[6px]">
    <FaUsers/>
<Link href={"signup"} className="text-[16px]  font-medium">Signup</Link>
</div>


    </div>

    </div>
  
    </>)
}

export default Navbar;