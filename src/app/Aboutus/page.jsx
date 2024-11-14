'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";
import AboutUsCards from "../../components/AboutUsCards/AboutUSCards";
import CountUp from "react-countup";

const page = () => {
  const stats = [
    { num: 10, text: "Years of Experience" },
    { num: 100, text: "Driven by Values" },
    { num: 1500, text: "Clients Served" },
  ];

  const OurStory = [
    {
      title: "Our Vision",
      img: "https://egerppanipat.com/wp-content/uploads/2024/01/digital-marketing-150x150.png",
      desc: "Our vision is to be the leading force in the digital solutions sector. We aim to transform the way businesses operate through technology. We want to create a future where every business, regardless of the size, has access to advanced technology.",
    },
    {
      title: "Our Mission",
      img: "https://egerppanipat.com/wp-content/uploads/2024/01/erp-150x150.png",
      desc: "We are on a mission to empower businesses by delivering top-notch digital solutions. We are dedicated to understanding the unique challenges and aspirations of each client, providing customized, cutting-edge solutions that drive efficiency, productivity, & growth.",
    },
    {
      title: "Our Values",
      img: "https://egerppanipat.com/wp-content/uploads/2024/01/software-engineering-150x150.png",
      desc: "At EGERP Panipat, we believe in building relationships that last. Our commitment goes beyond delivering services; we strive to be your trusted partner in your journey. Quality, innovation, and customer satisfaction are the cornerstones of our approach.",
    },
  ];

  return (
    <>
      {/* About Section */}
      <div className="pt-[50px] flex flex-col justify-center items-center md:flex-row gap-[30px] md:gap-[80px] lg:gap-[100px] px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[28px] text-wrap md:text-[40px] lg:text-[50px] xl:text-[52px]  font-bold leading-tight">
            About EGERP Panipat
          </h1>
          <button className="mt-5 h-12 w-[160px] sm:w-[180px] bg-red-500 text-white font-bold flex justify-center items-center rounded-lg hover:bg-red-600">
            <Link href="" className="flex items-center">
              Get In Touch <IoArrowForwardCircle className="ml-2 text-2xl sm:text-3xl" />
            </Link>
          </button>
        </div>
        <div className="w-full max-w-lg md:max-w-md lg:max-w-lg">
          <Image
            src="https://egerppanipat.com/wp-content/uploads/2024/01/pexels-tiger-lily-4481534-2048x1365.jpg"
            width={1600}
            height={1200}
            alt=""
            className="rounded-[50px] shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="pt-[60px] px-5 md:px-10 lg:px-20 text-center">
        <h1 className="text-[32px] md:text-[38px] xl:text-[45px] font-bold">OUR STORY</h1>
        <div className="mt-5 space-y-4 text-left max-w-6xl mx-auto text-[14px] md:text-lg xl:text-xl leading-relaxed">
          <p>
            Hi! Welcome to EGERP – your go-to solution for complex business problems. We are a globally reputed software development company serving global clients. We are a team of passionate experts dedicated to crafting cutting-edge solutions that empower businesses and individuals to succeed in the digital world.
          </p>
          <p>
            With a vision to eliminate the lack of advanced technologies for modern industries, EGERP Panipat is thriving as a digital marketing and software development company. We understand the value of technological advancements for increasing productivity and enhancing quality, and our in-house teams of dedicated professionals offer various services to achieve this objective effectively.
          </p>
        </div>
      </div>

      {/* Our Values Cards Section */}
      <div className="pt-[60px] flex justify-center px-5">
        <AboutUsCards OurStory={OurStory} />
      </div>

      {/* Why Choose Us Section */}
      <div className="pt-[80px] pb-[50px] px-5 md:px-10 lg:px-20">
        <h1 className="text-center text-[30px] md:text-[40px] lg:text-[50px] font-bold mb-10">
          Why Choose EGERP Panipat?
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border-l-2 border-black px-4"
            >
              <div className="flex items-center text-red-600 font-extrabold">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl sm:text-[24px] md:text-[34px] xl:text-6xl"
                />
                <span className="text-2xl sm:text-[24px] md:text-[34px] xl:text-6xl">
                  {index === 1 ? "%" : "+"}
                </span>
              </div>
              <p className="text-xl font-bold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
