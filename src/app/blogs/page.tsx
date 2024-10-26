'use client'
import React from "react";
import Bloglink from "../../components/blogslink/Bloglink";
import BlogpostCards from "../../components/BlogPost cards/BlogpostCards";

export default function Blogs() {
   
   
    const Smallblogs = [
        { id:1,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'At EGERP Panipat, we craft tailored digital marketing',
            link: 'https://egerppanipat.com/using-erp-software-for-your-business-accounting/'
        },
        { id:2,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'At EGERP Panipat, we craft tailored digital marketing ',
            link: 'https://egerppanipat.com/tax-implications-of-investing-in-mutual-funds/'
        },
        { id:3,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'At EGERP Panipat, we craft tailored digital marketing',
            link: 'https://egerppanipat.com/ways-to-make-a-grey-kitchen-look-more-lively/'
        },
        { id:4,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'At EGERP Panipat, we craft tailored digital marketing',
            link: "https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/"
        },
        
        { id:4,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'At EGERP Panipat, we craft tailored digital marketing',
            link: "https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/"
        },
        
        { id:4,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'At EGERP Panipat, we craft tailored digital marketing',
            link: "https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/"
        }
    ];


    const blogs = {
        Technology: [
          {
            id: 1,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'At EGERP Panipat, we craft tailored ',
            link: 'https://egerppanipat.com/using-erp-software-for-your-business-accounting/',
          },
          {
            id: 2,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Common SEO mistakes businesses ',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
          {
            id: 2,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Common SEO mistakes businesse',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
          {
            id: 2,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Common SEO mistakes businesses.',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          }
        ],
        Business: [
          {
            id: 3,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Maximizing efficiency with ERP solutions tailored for business accounting.',
            link: 'https://egerppanipat.com/using-erp-software-for-your-business-accounting/',
          },
          {
            id: 4,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'The benefits of ERP systems for small businesses.',
            link: 'https://egerppanipat.com/tax-implications-of-investing-in-mutual-funds/',
          },
          {
            id: 4,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'The benefits of ERP systems for small businesses.',
            link: 'https://egerppanipat.com/tax-implications-of-investing-in-mutual-funds/',
          },
          {
            id: 4,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'The benefits of ERP systems for small businesses.',
            link: 'https://egerppanipat.com/tax-implications-of-investing-in-mutual-funds/',
          },
        ],
        Travel: [
          {
            id: 5,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'How to leverage export management solutions to grow your business.',
            link: 'https://egerppanipat.com/ways-to-make-a-grey-kitchen-look-more-lively/',
          },
          {
            id: 6,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Export strategies for small and medium enterprises.',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
          {
            id: 6,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Export strategies for small and medium enterprises.',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
          {
            id: 6,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Export strategies for small and medium enterprises.',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
        ],
        Finance: [
          {
            id: 1,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'At EGERP Panipat, we craft tailored ',
            link: 'https://egerppanipat.com/using-erp-software-for-your-business-accounting/',
          },
          {
            id: 2,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Common SEO mistakes businesses ',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
          {
            id: 2,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Common SEO mistakes businesse',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
          {
            id: 2,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Common SEO mistakes businesses.',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          }
        ],
        Entertainment: [
          {
            id: 3,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Maximizing efficiency with ERP solutions tailored for business accounting.',
            link: 'https://egerppanipat.com/using-erp-software-for-your-business-accounting/',
          },
          {
            id: 4,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'The benefits of ERP systems for small businesses.',
            link: 'https://egerppanipat.com/tax-implications-of-investing-in-mutual-funds/',
          },
          {
            id: 4,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'The benefits of ERP systems for small businesses.',
            link: 'https://egerppanipat.com/tax-implications-of-investing-in-mutual-funds/',
          },
          {
            id: 4,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'The benefits of ERP systems for small businesses.',
            link: 'https://egerppanipat.com/tax-implications-of-investing-in-mutual-funds/',
          },
        ],
        Education: [
          {
            id: 5,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'How to leverage export management solutions to grow your business.',
            link: 'https://egerppanipat.com/ways-to-make-a-grey-kitchen-look-more-lively/',
          },
          {
            id: 6,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Export strategies for small and medium enterprises.',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
          {
            id: 6,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Export strategies for small and medium enterprises.',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
          {
            id: 6,
            img: 'https://egerppanipat.com/wp-content/uploads/2024/01/pexels-lukas-574070-1024x678.jpg',
            desc: 'Export strategies for small and medium enterprises.',
            link: 'https://egerppanipat.com/5-common-seo-mistakes-businesses-make-and-how-to-avoid-them/',
          },
        ],
      };
      

    return (
        <>
        <div className="my-[50px] font-poppins font-bold text-[70px] flex flex-row justify-center items-center"><h1>Welcome to Blog</h1></div>
        <div className=" flex flex-row justify-center items-center">
            <Bloglink blogs={blogs}  />
            
        </div>
        <div className=" flex flex-row justify-center items-center">
                <BlogpostCards Smallblogs={Smallblogs} />
        </div>
        </>
    );
}
