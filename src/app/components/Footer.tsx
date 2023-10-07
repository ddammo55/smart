'use client';
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";

import {
    BsYoutube,
    BsGithub,
    BsLinkedin,
    BsFacebook, 
    BsReddit,
  } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <div className="w-full bg-darkText text-slate-100">
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="flex flex-col gap-y-4">
                   <Logo/> 
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil magni quo magnam necessitatibus libero et eos voluptatibus assumenda, accusamus, voluptas voluptatem? Necessitatibus, ea ? Velit quae autem obcaecati possimus debitis cumque!
                    </p>
            <div className="flex items-center gap-x-4">
                    <a href="https://www.youtube.com" target="_blank">
                        <span className="socialLink">
                            <BsYoutube />
                        </span>
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                        <span className="socialLink">
                            <BsGithub />
                        </span>
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                        <span className="socialLink">
                            <BsLinkedin />
                        </span>
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                        <span className="socialLink">
                            <BsFacebook />
                        </span>
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                        <span className="socialLink">
                            <BsReddit />
                        </span>
                    </a>
                    </div>
                </div>
                <div>
                    <p className="text-xl font-light">
                        Laset posts
                    </p>
                    <ul className="text-sm font-light mt-2 flex flex-col gapy-y-2">
           
                        <li className="flex flex-col">
                            <span className="hover:text-orange-600 cursor-pointer duration-200">Where Is Headed Next</span>
                            <span className="text-orange-600">January 31, 2023</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="hover:text-orange-600 cursor-pointer duration-200">Where Is Headed Next</span>
                            <span className="text-orange-600">January 31, 2023</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="hover:text-orange-600 cursor-pointer duration-200">Where Is Headed Next</span>
                            <span className="text-orange-600">January 31, 2023</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="hover:text-orange-600 cursor-pointer duration-200">Where Is Headed Next</span>
                            <span className="text-orange-600">January 31, 2023</span>
                        </li>
                    </ul>
                </div>
                <div>

                    <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
                        <Link href="/">
                        <li className="hover:text-orange-500  cursor-pointer duration-200">Home</li>
                        </Link>

                        <Link href="/cart">
                        <li className="hover:text-orange-500  cursor-pointer duration-200">Cart</li>
                        </Link>

                         <Link href="/about">
                        <li className="hover:text-orange-500  cursor-pointer 
                        duration-200">About</li>
                        </Link>

                        <Link href="/newsletter">
                        <li className="hover:text-orange-500 cursor-pointer duration-200">Newsletter</li>
                        </Link>

                        <Link href="/contact">
                        <li className="hover:text-orange-500 cursor-pointer duration-200">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <p className="text-lg mb-2">Pay us with your trusted services</p>
                    <Image 
                    src={payment} alt="pay ment banner image" className="w-full h-10 object-cover" 
                    />
                </div>
            </Container>
        </div>
    );
}

