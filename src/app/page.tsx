"use client";

import Image from "next/image";
import Link from "next/link";

import CountUp from "react-countup";
import { IoChevronForward } from "react-icons/io5";

import { IoArrowForwardCircle } from "react-icons/io5";

export default function Home() {
  const stats = [
    {
      num: 10,
      text: "Years of Experiencee",
    },
    {
      num: 100,
      text: "Driven by Values",
    },
    {
      num: 1500,
      text: "Clients Served",
    },
  ];

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

  const resources = [
    {
      image: "/Images/AccountImage.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/09/pexels-tima-miroshnichenko-6694543-2048x1365.jpg",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/08/Ft-Images-4.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/08/modern-kitchen-design-interior-2048x1148.jpg",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/05/Ft-Img-Link-Exchange.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/04/ID-ft-67.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/04/ID-ft-64.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/04/Untitled-design-2024-04-22T102308.342.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/04/Untitled-design-2024-04-16T145928.084.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/04/Untitled-design-2024-04-16T145928.084.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/02/fitcher-image-.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
    {
      image: "https://egerppanipat.com/wp-content/uploads/2024/02/Untitled-design-2024-02-23T114533.790.png",
      title: "Using ERP Software for Your Business’ Accounting",
      path: "",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-center mt-10">
        {/* text section */}
        <div className="w-full lg:w-1/2 flex flex-col mb-4 my-42">
          <h1 className="w-4/5 sm:w-3/4 lg:w-1/2 font-poppins text-2xl font-bold mx-auto mb-8 flex justify-center items-center bg-white text-center">
            We Help Organizations Run Smooth Business Operations.
          </h1>
          <div className="flex justify-center lg:justify-center">
            <button className="h-12 sm:h-14 px-4 rounded-lg font-bold w-40 sm:w-48 bg-red-500 text-white flex justify-center items-center">
              <Link href="" className="flex justify-center items-center">
                Get In Touch{" "}
                <span className="ml-1 text-2xl sm:text-3xl font-bold">
                  <IoArrowForwardCircle />
                </span>
              </Link>
            </button>
          </div>
        </div>

        {/* image section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-4 lg:mt-0">
          <Image
            src="https://egerppanipat.com/wp-content/uploads/2024/01/pexels-tiger-lily-4481534-2048x1365.jpg"
            width={600}
            height={100}
            alt=""
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* second section */}

      <div className="flex mt-20 justify-center">
        <h1 className="flex text-center font-bold text-[60px]">
          EGERP Panipat
        </h1>
      </div>
        <div className="flex flex-col md:flex-row items-center mt-16">
          {/* image sections */}

          {/* text sections */}
          <div className="lg:w-[100%] sm:w-[100%] flex justify-center ">
            <div className="w-[70%] flex flex-col text-center">
              <h1 className="text-[40px] font-bold">Who We Are?</h1>
              <p>
                We are pioneers of progression. At EGERP Panipat, we offer
                tailored digital solutions for business of all sizes. We are
                dedicated to transforming businesses through technical expertise
                and business intelligence, focusing on quality, innovation,
                creativity, and expertise.
              </p>
              <p>
                Our team of experts brings a wealth of experience and creativity
                to the table, ensuring that your brand stands out and thrives in
                the online world.
              </p>
              <p>
                Our motto is to deliver the highest quality product, total
                client satisfaction, timely delivery of solutions and the best
                quality/price ratio found in the industry.
              </p>
            </div>
          </div>
          <div className="sm:w-[100%] lg:w-[60%] m-4 flex justify-center mr-2 items-center">
            <Image
            src="https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg"
              width={600}
              height={80}
              alt=""
              className="rounded-[25px] "
            />
          </div>
        </div>
 

      {/* third  section */}

      <div className="flex flex-col-reverse md:flex-row items-center mt-32 ">
          {/* image sections */}
          <div className="sm:w-[100%] lg:w-[60%] m-4 flex justify-center mr-2 items-center">
          <Image
            src="https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg"
            width={600}
            height={400}
            alt="Meeting Room"
            className="rounded-[25px] object-cover"
          />
          </div>
          {/* text sections */}
          <div className="lg:w-[100%] sm:w-[100%] flex justify-center ">
            <div className="w-[70%] flex flex-col text-center">
          <h1 className="text-[40px] font-bold mb-4">What We Do?</h1>
          <p className="text-wrap mb-4">
            We specialize in digital marketing, ERP solutions, and customized
            software for our clients, prioritizing user-friendliness in every
            solution we build. Our customizable ERP solution integrates all
            facets of your business into one efficient platform. With our
            user-friendly software designs and smart digital marketing
            strategies, we ensure your business stands out in the crowd.
          </p>
          <p className="mb-4">
            We tailor our approach to fit your unique needs, ensuring seamless
            workflow and enhanced productivity.
          </p>
          <p>
            With EGERP Panipat, you’re not just finding digital solutions;
            you’re embracing a future of endless possibilities and growth.
          </p>
            </div>
          </div>
        </div>

      {/* fourth section */}
      <div className="flex flex-col md:flex-row items-center mt-32 ">
          {/* image sections */}

          {/* text sections */}
          <div className="lg:w-[100%] sm:w-[100%] flex justify-center ">
            <div className="w-[70%] flex flex-col text-center">
            <h1 className="text-[40px] font-bold">Our Impact</h1>
            <p>
            With every project, we don’t just deliver software; we deliver experiences that shape futures. Our impact resonates beyond code and design. We have provided diverse solutions to uplift the digital landscape of today’s business world.
            </p>
            <p>
            Our clients’ success stories are our badges of honor, reflecting our commitment to excellence and the powerful, positive change we bring to every venture.
            </p>
            <p>
            Join us, and let’s make an impact together – an impact that lasts and leads the way to a brighter, more successful future.
            </p>
            </div>
          </div>
          <div className="sm:w-[100%] lg:w-[60%] m-4 flex justify-center mr-2 items-center">
          <Image
            src={
              "https://egerppanipat.com/wp-content/uploads/2024/01/pexels-tom-fisk-3856433-scaled-e1706178875123-1024x650.jpg"
            }
            width={600}
            height={80}
            alt=""
            className="rounded-[25px] "
          />
          </div>
        </div>

      {/* Our Services section */}
      <div className="flex justify-center items-center flex-col  w-full">
        <h1 className="flex h-60 my-6 justify-center items-center font-bold text-[50px]">
          Our Services
        </h1>

        {/* cards */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {OurServices.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className="h-[380px] p-5 w-[400px] border-[3px] rounded-lg border-black flex flex-col justify-center items-center text-center"
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

      {/* why we choose section */}
      <div className="flex flex-col text-center">
        {/* heading */}

        <h1 className="flex h-60 my-6 justify-center  items-center font-bold text-[50px] ml-4">
          Why Choose EGERP Panipat?
        </h1>
      </div>

        {/* graph section */}
        <div className="flex justify-center">
          <div className="flex gap-3 flex-col md:w-[80vw]  md:flex-row justify-center">
            {stats.map((item, index) => {
              return (
                <>
                  <div
                    className="flex-1  w-64 flex border-l-2 border-black pl-2 flex-col items-center justify-center"
                    key={index}
                  >
                    <div className="flex items-center">
                      <CountUp
                        end={item.num}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-extrabold
                          text-red-600"
                      />
                      {index == 1 ? (
                        <span
                          className="text-4xl xl:text-6xl font-extrabold
                          text-red-600"
                        >
                          %
                        </span>
                      ) : (
                        <span
                          className="text-4xl xl:text-6xl font-extrabold
                          text-red-600"
                        >
                          +
                        </span>
                      )}
                    </div>

                    <p className="w-[200px] flex justify-center items-center font-sans text-4xl font-bold text-center">
                      {item.text}{" "}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>

      {/* Resources & Insights sections */}
      <div className="h-auto flex flex-col justify-center items-center">
        {/* heading section */}
        <div className="text-center">
          <h1 className="flex h-60 my-6 justify-center items-center font-bold text-[50px]">
            Resources & Insights
          </h1>
        </div>

        {/* cards sections */}

        <div className="md:flex md:flex-wrap grid grid-cols-2 justify-center gap-2 ">
          {resources.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex flex-col rounded-2xl w-[400px] shadow-lg hover:shadow-xl"
                >
                  <Image
                    className="rounded-t-2xl"
                    src={items.image}
                    width={500}
                    layout="responsive"
                    height={100}
                    alt="alt"
                  ></Image>

                  <h1 className="text-xl mt-10 mx-5 font-bold">
                    {items.title}
                  </h1>
                  <Link href={items.path}>
                    <button className="flex mt-7 font-semibold mx-5 mb-5 justify-center  items-center border-red-600 border-t-2 text text-red-600">
                      READ MORE{" "}
                      <span className="text-red-600 flex justify-center items-center gap-0 text-sm">
                        <IoChevronForward className=" text-[20px] w-[10px]" />
                        <IoChevronForward className=" text-[20px] w-[10px]" />
                      </span>
                    </button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="flex h-48 justify-center items-center">
        <button className="h-14 p-1 rounded-lg font-bold w-52 text-lg bg-red-500 text-white flex justify-center items-center">
          <Link href={"/blogs"} className="flex justify-center items-center ">
            Our Blogs Section
            <span className="ml-1 text-3xl font-bold ">
              <IoArrowForwardCircle />
            </span>
          </Link>
        </button>
      </div>
    </>
  );
}
