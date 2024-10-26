'use client'
import Navbar from "@/components/Header/Navbar";
import MobileNav from "@/components/Header/MobileNav"
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";


const Header=()=>{
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        
            setIsNavVisible((prev) =>!prev);
          
      };

    return(
    <>
    <div className="sticky top-0 z-50  border-gray-500 shadow-sm border-b-[0.3px]  bg-white">
         <div className="pt-4 pb-4  lg:hidden">
            
<div className='text-center justify-center flex  items-center gap-8 font-bold text-4xl'>  <Link href={"/"} className="flex  justify-center items-center w-64">
  <div className="  flex text-red font-extrabold text-[40px] text-green-600 dark:text-white"><Image src="/Images/logo.png" width={300} height={10} alt="logo"/></div>

  </Link><FaBars onClick={toggleNav}/></div>
<div className={`transition-all duration-1000 ease-in-out ${isNavVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
{isNavVisible&&<MobileNav/>}
</div>
    

   
 
    </div>
  <div className="xl:block  hidden">
        <Navbar/>
        </div>
     
   


        </div>
    </>
    )
}

export default Header;