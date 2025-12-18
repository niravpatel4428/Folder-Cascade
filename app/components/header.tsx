"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/images/folder-icon.png";
import icon from "@/public/images/svg/android.svg"
import BtnAppStore from './btnAppStore';
import { useLenis } from "./LenisProvider";
const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Social", href: "#social" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];


const HeaderNav = () => {
    const lenis = useLenis();

    const handleScroll = (
        e: React.MouseEvent,
        target: string
    ) => {
        e.preventDefault();
        lenis?.scrollTo(target);
    };

    return (
        <>
            <ul className='flex max-xl:flex-col items-center max-xl:gap-10 gap-5'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} onClick={(e) => handleScroll(e, link.href)} className='min-w-27.5 block text-center py-1.5 px-5 text-black font-normal text-lg leading-snug tracking-tight bg-white rounded-30 border border-cs-sky-50/30 hover:text-white hover:bg-cs-sky-50 transition-all duration-300'> {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleCollapse = () => setMenuOpen((prev) => !prev);
    // Disable body scroll when the menu is open
    useEffect(() => {
        if (menuOpen) {
            // Add overflow-hidden to the body to prevent scrolling
            document.body.style.overflow = "hidden";
        } else {
            // Remove overflow-hidden when the menu is closed
            document.body.style.overflow = "auto";
        }

        // Clean up the effect by resetting the scroll behavior
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);
    return (
        <>
            <header className={`pt-5 ${menuOpen ? 'bg-white' : ''}`}>
                <div className="container 4xl:max-w-438">
                    <div className="relative z-51 bg-cs-gray100 rounded-4xl p-3.5">
                        <div className="flex items-center justify-between gap-10">
                            <div className="xl:flex-1 pl-0.5">
                                <Link href="/" className='block relative z-51'>
                                    <Image src={logo} alt="logo" className='w-15.5' />
                                </Link>
                            </div>

                            {/* Hamburger */}
                            <button
                                className="xl:hidden cursor-pointer relative z-51 flex flex-col justify-center items-center w-8 h-8"
                                aria-label="Toggle menu"
                                onClick={toggleCollapse}
                            >
                                <span
                                    className={`block bg-black rounded-full h-0.5 w-6 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                                        }`}
                                />
                                <span
                                    className={`block bg-black rounded-full h-0.5 w-3 mb-1 ml-2 transition-all ${menuOpen ? "opacity-0" : ""
                                        }`}
                                />
                                <span
                                    className={`block bg-black rounded-full h-0.5 w-6 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                        }`}
                                />
                            </button>

                            {/* links */}
                            <div
                                className={`max-xl:w-full max-xl:backdrop-blur-2xl max-xl:fixed max-xl:top-24.25 max-xl:bottom-0 max-xl:-left-full max-xl:overflow-y-auto ${menuOpen ? "max-xl:left-0" : ""
                                    } xl:relative transition-all duration-300 z-50`}
                            >
                                <div className={`${menuOpen ? "" : ""
                                    } h-full max-xl:pt-32 max-xl:bg-white max-xl:backdrop-blur-3xl xl:flex-1`}>
                                    <HeaderNav />
                                </div>
                            </div>

                            {/* desktop btn */}
                            <div className="xl:flex-1 hidden xl:block">
                                <div className='flex justify-end w-full'>
                                    <BtnAppStore label='Get it on the Mac App Store' icon={icon} mainClass="xl:whitespace-nowraps" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
