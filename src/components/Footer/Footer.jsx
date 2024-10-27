'use client';
import Link from "next/link";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const companyLinks = ["About Us", "Our Services", "Our Work Process", "Blog & Resources", "Contact Us"];
    const socialIcons = [
        { icon: <BsTwitterX />, path: "https://twitter.com" },
        { icon: <FaInstagram />, path: "https://instagram.com" },
        { icon: <FaFacebookF />, path: "https://facebook.com" },
        { icon: <FaLinkedinIn />, path: "https://linkedin.com" }
    ];
    const legalLinks = ["Privacy Policy", "Cookie Policy", "Client NDA", "Terms of Service", "Customer Care"];
    const servicesLinks = ["SEO", "PPC", "Web Design", "ERP Solutions", "Custom Software"];

    return (
        <footer className="bg-gray-700 py-10">
            <div className="container mx-auto flex flex-wrap justify-between items-start text-white">
                {/* First Section */}
                <div className="flex flex-col w-96 gap-5 p-5">
                    <Image src="/Images/logo.png" width={200} height={20} alt="Logo" />
                    <p className="text-red-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, eum.</p>
                    <Link href="/" className="text-red-500 text-lg underline">Learn more...</Link>
                </div>

                {/* Second Section */}
                <div className="flex flex-col w-52 p-5">
                    <h1 className="font-semibold text-xl border-b-2 mb-3 w-[90px]">Company</h1>
                    <div className="flex flex-col text-red-500 text-lg gap-1">
                        {companyLinks.map((link, index) => (
                            <Link key={index} href={`/${link.replace(/\s+/g, '-').toLowerCase()}`}>{link}</Link>
                        ))}
                    </div>
                </div>

                {/* Third Section */}
                <div className="flex flex-col w-52 p-5">
                    <h1 className="font-semibold text-xl border-b-2 mb-3 w-[80px]">Services</h1>
                    <div className="flex flex-col text-red-500 text-lg gap-1">
                        {servicesLinks.map((link, index) => (
                            <Link key={index} href={`/${link.replace(/\s+/g, '-').toLowerCase()}`}>{link}</Link>
                        ))}
                    </div>
                </div>

                {/* Fourth Section */}
                <div className="flex flex-col w-52 p-5">
                    <h1 className="font-semibold text-xl border-b-2 mb-3 w-[54px]">Legal</h1>
                    <div className="flex flex-col text-red-500 text-lg gap-1">
                        {legalLinks.map((link, index) => (
                            <Link key={index} href={`/${link.replace(/\s+/g, '-').toLowerCase()}`}>{link}</Link>
                        ))}
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col w-52 p-5 sm:justify-center justify-start sm:items-center items-start">
                    <h1 className="font-semibold text-xl border-b-2 mb-3 w-[124px]">Social Media</h1>
                    <div className="flex flex-col justify-center sm:items-center items-start gap-2">
                        {socialIcons.map((item, index) => (
                            <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className="rounded-full bg-red-500 hover:bg-white hover:text-red-600 text-white h-10 w-10 flex justify-center items-center">
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center text-white h-20 text-lg mt-5">
                <p>EGERP Panipat. &copy;2024 All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
