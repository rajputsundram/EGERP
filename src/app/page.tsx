
'use client'
import Image from "next/image";
import Link from "next/link";

import CountUp from 'react-countup';


import { IoArrowForwardCircle } from "react-icons/io5";

export default function Home() {




const stats=[
    {
        num:10,
        text:"Years of Experience",
    },
    {
        num:100,
        text:"Driven by Values",
    },
    {
        num:1500,
        text:"Clients Served",
    },
    {
        num:100,
        text:"Code commits",
    },
]

  const OurServices=[
    {
      title:'Digital Marketing',
      img:'https://egerppanipat.com/wp-content/uploads/2024/01/digital-marketing-150x150.png',
      desc:'At EGERP Panipat, we craft tailored digital marketing strategies that amplify your online presence, engage your audience, and drive conversions. From SEO to social media, we ensure your brand not only gets noticed but remembered and preferred.'

    },
    {
      title:'ERP Solutions',
      img:'https://egerppanipat.com/wp-content/uploads/2024/01/erp-150x150.png',
      desc:'We offer a complete ERP suite, designed for both, simplicity and power. Our ERP software is customizable and designed to manage all your business processes at a single platform. Effortlessly integrate EGERP with your exciting tools and streamline your business.'
    },
    {
      title:'Custom Software',
      img:'https://egerppanipat.com/wp-content/uploads/2024/01/software-engineering-150x150.png',
      desc:'Develop high-quality software products in a cost-efficient way with EGERP Solutions. Boost your productivity, and give you a competitive edge in your industry. We have the best-in-class infrastructure for creating high-performance, value-led software solutions'
    },

  ]
  return (
    <>
<div className="w-full mt-24 flex justify-center items-center">
  {/* text section */}
  <div className="  w-[50%] flex flex-col  ">
    <h1 className="w-[70%] font-poppins  text-[46px]  font-bold ml-[250px] mb-8 flex justify-end items-end bg-white " >We Help Organizations Run Smooth Business Operations.</h1>
  <button className="h-14 p-1 rounded-lg font-bold w-48 ml-[250px] bg-red-500 text-white flex justify-center items-center"><Link href={""}className="flex justify-center items-center ">Get In Touch <span className="ml-1 text-3xl font-bold "><IoArrowForwardCircle /></span></Link></button>
  </div>

    {/* image section */}
    <div className="w-[50%]  flex  items-center"><Image src={"https://egerppanipat.com/wp-content/uploads/2024/01/pexels-tiger-lily-4481534-2048x1365.jpg"} width={600} height={100} alt=""  className="rounded-[25px] "/></div>

</div>



{/* second section */}

<div className="flex flex-col">
<h1 className="flex h-60 my-12 justify-center items-center font-bold text-[60px]">EGERP Panipat</h1>

<div className="flex">
  

{/* image sections */}
<div className="w-[50%]  flex  items-center justify-end "><Image src={"https://egerppanipat.com/wp-content/uploads/2024/01/employees-meeting-room-office-scaled-1-1024x784.jpg"} width={600} height={80} alt=""  className="rounded-[25px] "/></div>



  {/* text sections */}
  <div className="w-[50%]">
  <div className="w-[70%] ml-8  h-60 ">
    <h1 className="text-[40px]  font-bold">
    Who We Are?</h1>
    <p>We are pioneers of progression. At EGERP Panipat, we offer tailored digital solutions for business of all sizes. We are dedicated to transforming businesses through technical expertise and business intelligence, focusing on quality, innovation, creativity, and expertise.  
<p>
Our team of experts brings a wealth of experience and creativity to the table, ensuring that your brand stands out and thrives in the online world.
</p>
<p>
Our motto is to deliver the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry.
</p>
</p>
  </div>

</div>
</div>
</div>


{/* third  section */}

<div className="flex flex-col mt-28">


<div className="flex">
  {/* text sections */}
  <div className="w-[50%] flex-col flex  items-end">
  <div className="w-[70%]  h-60   mr-3 ">
    <h1 className="text-[40px]  font-bold">
    What We Do?
</h1>
    <p>We specialize in digital marketing, ERP solutions and customized software for our clients, prioritizing user-friendliness in every solution we build. Our customizable ERP solution integrates all facets of your business into one efficient platform. With our user friendly software designs and smart digital marketing strategies, we ensure your business stands out in the crowd 
    </p>

<p>
We tailor our approach to fit your unique needs, ensuring seamless workflow and enhanced productivity.
</p>
<p>
With EGERP Panipat, you’re not just finding digital solutions; you’re embracing a future of endless possibilities and growth.
</p>

  </div>

</div>
{/* image sections */}
<div className="w-[50%]  flex  items-start justify-start "><Image src={"https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg"} width={600} height={80} alt=""  className="rounded-[25px] "/></div>


</div>
</div>

{/* fourth section */}

<div className="flex flex-col mt-32">


<div className="flex">
  

{/* image sections */}
<div className="w-[50%]  flex  items-center justify-end "><Image src={"https://egerppanipat.com/wp-content/uploads/2024/01/pexels-tom-fisk-3856433-scaled-e1706178875123-1024x650.jpg"} width={600} height={80} alt=""  className="rounded-[25px] "/></div>



  {/* text sections */}
  <div className="w-[50%]">
  <div className="w-[70%] ml-8  h-60 ">
    <h1 className="text-[40px]  font-bold">
    Our Impact
    </h1>
    <p>With every project, we don’t just deliver software; we deliver experiences that shape futures. Our impact resonates beyond code and design. We have provided diverse solutions to uplift the digital landscape of today’s business world. 
<p>
Our clients’ success stories are our badges of honor, reflecting our commitment to excellence and the powerful, positive change we bring to every venture.
</p>
<p>
Join us, and let’s make an impact together – an impact that lasts and leads the way to a brighter, more successful future.
</p>
</p>
  </div>

</div>
</div>
</div>



{/* Our Services section */}
<div className="h-[700px] flex justify-center items-center flex-col  w-full">
  <h1 className="flex h-60 my-6 justify-center items-center font-bold text-[50px]">Our Services</h1>

  {/* cards */}
  <div className="flex items-center justify-center gap-8">
    {
      OurServices.map((items,index)=>{
        return(<>
        <div key={index} className="h-[380px] p-5 w-[400px] border-[3px] rounded-lg border-black flex flex-col justify-center items-center text-center">
<h1 className="text-[30px] mb-4 font-bold">{items.title}</h1>
<Image src={items.img} width={100} height={100} alt=""></Image>
<p className=" my-2 text-lg">{items.desc}</p>

        </div>
        
        
        </>)
      })
    }
  </div>
  <div className="my-14">
  <button className="h-14 p-1 rounded-lg font-bold w-48  bg-red-500 text-white flex justify-center items-center"><Link href={""}className="flex justify-center items-center ">Get In Touch <span className="ml-1 text-3xl font-bold "><IoArrowForwardCircle /></span></Link></button>
  </div>

</div>

{/* why we choose section */}
<div className="flex flex-col">

  {/* heading */}

  <h1 className="flex h-60 my-6 justify-center items-center font-bold text-[50px]">Why Choose EGERP Panipat?</h1>



  
  {/* graph section */}
  <div className="flex justify-center">

  <div className='flex gap-16 max-w-[80vw] justify-center items-center bg-red-500 '>
                {stats.map((item,index)=>{

                    
                    return(
                    <>
                    <div className='flex-1 bg-blue-400 flex flex-col items-center justify-center' key={index}>
                        <CountUp end={item.num}
                         duration={5} delay={2} className='text-4xl xl:text-6xl font-extrabold
                          text-red-600'/>
                         
                   <p className='w-[200px] flex justify-center items-center font-sans text-[30px] text-center'>{item.text}</p>
                    </div>
                    </>
                    )

                })}
            </div>
  </div>
</div>
</>
  );
}
