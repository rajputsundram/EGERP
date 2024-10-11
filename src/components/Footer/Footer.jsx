'use client'
import Link from "next/link";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer=()=>{
   

const company=["About Us","Our Services","Our Work Process","Blog & Resources","Contact Us"];

const SocialIcons=[{icons:<BsTwitterX/>,path:""},{icons:<FaInstagram/>,path:""},{icons:<FaFacebookF/>,path:""},{icons:<FaLinkedinIn/>,path:""}]
const legals=["Privacy Policy","Cookie Policy","Client NDA","Terms of Service","Customer Care",]
const services=["SEO","PPC","Web Design","ERP Solutions","Custom Software",]


    return(
        <>
        <div className="bg-gray-700 h-auto sm:h-[450px] flex flex-col justify-center items-center ">
            <div className="container    flex justify-start sm:justify-center flex-wrap   sm:gap-6  sm:items-center ">
            {/* first section */}
            <div className=" flex flex-col w-96 h-52  sm:h-72 gap-7 p-7   sm:pt-0">
              <div><Image src="/Images/logo.png" width={200} height={20} alt=""></Image></div>
                <div className="flex flex-col justify-start items-start gap-3">
                <p className="text-red-400  text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, eum.</p>
                   <button className="text-red-500 text-lg">Learn more...</button>
                </div>


            </div>
            {/* Second Sections */}
            <div className="flex flex-col   h-52 p-7  sm:pt-0 sm:h-72 ">
                <h1 className="font-semibold text-xl text-white  border-b-2  w-[89px] mb-6">Company</h1>
               
               <div className="flex flex-col text-red-500  text-[18px] font-semibold font-md gap-1 ">
                {
                     company.map((links,index)=>{
                        return(<>
                        <Link key={index} href={""}>{links}</Link>
                        </>)
                      })  
                    }
                    </div>
            </div>
            {/* Third section */}
            <div className="flex flex-col w-52   h-52 p-7  sm:pt-0 sm:h-72 ">
                <h1 className="font-semibold text-xl text-white  border-b-2 mb-6 w-[80px]">Services</h1>
<div className="flex flex-col text-red-500  text-[18px] font-semibold font-md gap-1">
      {
        services.map((links,index)=>{
           return(<>
           <Link key={index} href={""}>{links}</Link>
           </>)
         })  
       }
       </div>


            </div>

           

            {/* fourth section */}
            <div className="flex flex-col w-52 bg-red  h-52 p-7  sm:pt-0 sm:h-72 ">
                <h1 className="font-semibold text-xl text-white   border-b-2  w-[53px] mb-6  ">Legal</h1>
<div className="text-red-500 flex  flex-col text-[18px] font-semibold font-md gap-1">
      {
        legals.map((links,index)=>{
           return(<>
           <Link key={index} href={""}>{links}</Link>
           </>)
         })  
       }
       </div>


            </div>


{/* social media Sections */}

            <div className="w-full sm:w-52   p-7  flex-col flex  items-center  sm:pt-0 sm:h-72 ">
                <h1 className="font-semibold text-xl text-white border-b-2 mb-6 w-[123px] ">Social Media</h1>
                <div className="flex flex-col ">
                {
                   SocialIcons.map((items,index)=>{
                    return(

                        <>
                        <div className="rounded-full bg-red-500 hover:bg-white hover:text-red-600 text-white h-10 w-10 flex justify-center items-center m-1">
                        <Link  key={index} href={items.path}>
                         {items.icons}
                        </Link>
                        </div>
                        </>
                    )

                   }) 
                }
                </div>
            </div>

            </div>
            <div  className="flex text-white mb-2 h-20  text-lg   justify-center items-center">
            <p>EGERP Panipat. &copy;2024 All right reserved</p>
           </div>
        </div>
       
      
        </>

        
    )
}

export default Footer;