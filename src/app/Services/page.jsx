import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { IoArrowForwardCircle } from "react-icons/io5";


const page = () => {

    const OurServices = [
        {
          title: "Digital Marketing",
          img: "https://egerppanipat.com/wp-content/uploads/2024/01/digital-marketing-150x150.png",
          desc: "At EGERP Panipat, we craft tailored digital marketing strategies that amplify your online presence, engage your audience, and drive conversions. From SEO to social media, we ensure your brand not only gets noticed but remembered and preferred.",
        },
        {
          title: "ERP Solutions",
          img: "https://egerppanipat.com/wp-content/uploads/2024/01/erp-150x150.png",
          desc: "We offer a complete ERP suite, designed for both, simplicity and power. Our ERP software is customizable and designed to manage all your business processes at a single platform. Effortlessly integrate EGERP with your exciting tools and streamline your business.",
        },
        {
          title: "Custom Software",
          img: "https://egerppanipat.com/wp-content/uploads/2024/01/software-engineering-150x150.png",
          desc: "Develop high-quality software products in a cost-efficient way with EGERP Solutions. Boost your productivity, and give you a competitive edge in your industry. We have the best-in-class infrastructure for creating high-performance, value-led software solutions",
        },
      ];
  return (
   <>
      <div className="flex justify-center items-center flex-col   w-full ">
        <h1 className="flex h-60 my-6 justify-center items-center font-bold text-[50px] sm:no-underline underline">
          Our Services
        </h1>

        {/* cards */}
        <div className="flex items-center justify-center gap-8 flex-wrap sm:p-0 p-4 ">
          {OurServices.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className="sm:h-[380px]  p-5 sm:w-[400px]  border-[3px] rounded-lg border-black flex flex-col justify-center items-center text-center"
                >
                  <h1 className="text-[30px] mb-4 font-bold">{items.title}</h1>
                  <Image
                    src={items.img}
                    width={100}
                    height={100}
                    alt=""
                  ></Image>
                  <p className=" my-2 text-lg">{items.desc}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="my-14">
          <button className="h-14 p-1 rounded-lg font-bold w-48  bg-red-500 text-white flex justify-center items-center">
            <Link href={""} className="flex justify-center items-center ">
              Get In Touch{" "}
              <span className="ml-1 text-3xl font-bold ">
                <IoArrowForwardCircle />
              </span>
            </Link>
          </button>
        </div>
      </div>
   </>
  )
}

export default page
