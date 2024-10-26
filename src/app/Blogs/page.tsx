'use client'

import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

const page = () => {
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
