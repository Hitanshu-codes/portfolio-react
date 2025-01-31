"use client";
// import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { Dialog, DialogPanel } from '@headlessui/react';
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DecryptedText from '../components/decryptedtext.js';

// const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About me', href: '/about-me' },
//     { name: 'Skills', href: '#' },
//     { name: 'Projects', href: '#' },
// ];

export default function Home() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>

            <div className="relative bg-transparent">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h1 className="mt-24 text-4xl font-bold tracking-tight text-red-700 sm:mt-10 sm:text-6xl">
                                <DecryptedText text="Hitanshu Tandon" />
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-white">
                                Passionate about programming, with a keen interest in Hackathons and Competitive Coding. I thrive in dynamic environments and excel at quickly learning new technologies. My strong organizational skills make me adept at efficiently managing tasks and projects.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <Link
                                    to="/about-me"
                                    className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </Link>
                                <a href="https://www.linkedin.com/in/hitanshu-tandon/" className="text-sm font-semibold leading-6 text-red-700">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-16 sm:mt-24 lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                        <img
                            alt=""
                            src="/canva bg remove deadpool.png"
                            className="aspect-auto w-fit  bg-transparent object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
