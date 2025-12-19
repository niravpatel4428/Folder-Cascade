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

const HeaderNav = ({ toggleCollapse }: { toggleCollapse: () => void }) => {
    const lenis = useLenis();
    const [activeHash, setActiveHash] = useState("");

    const handleScroll = (e: React.MouseEvent, target: string) => {
        e.preventDefault();
        lenis?.scrollTo(target, {
            offset: -58,
        });
        setActiveHash(target);
    };

    useEffect(() => {
        const sections = navLinks
            .map(link => document.querySelector(link.href))
            .filter(Boolean) as HTMLElement[];
        const HEADER_HEIGHT = 108;
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveHash(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: `-${HEADER_HEIGHT}px 0px -50% 0px`, // activates when section is centered
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <ul className='flex max-xl:flex-col items-center max-xl:gap-10 gap-5'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} onClick={(e) => {handleScroll(e, link.href);toggleCollapse()}} className={`min-w-27.5 block text-center py-1.5 px-5 text-black font-normal text-lg leading-snug tracking-tight bg-white rounded-30 border border-cs-sky-50/30 hover:text-white hover:bg-cs-sky-50 transition-all duration-300 ${activeHash === link.href ? "text-white! bg-cs-sky-50!" : ""}`}> {link.label}
                    </Link>
                    </li>
                ))}
        </ul >
        </>
    );
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleCollapse = () => setMenuOpen((prev) => !prev);
    // Disable body scroll when the menu is open
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 1280px)").matches;
        if (menuOpen && isMobile) {
            // Add overflow-hidden to the body to prevent scrolling
            document.body.style.overflow = "hidden";
        } else {
            // Remove overflow-hidden when the menu is closed
            document.body.style.overflow = "unset";
        }

        // Clean up the effect by resetting the scroll behavior
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);
    return (
        <>
            <header className={`pt-5 ${menuOpen ? 'bg-white' : ''} fixed top-0 left-0 right-0 z-50`}>
                <div className="container 4xl:max-w-438">
                    <div className="relative z-51 bg-cs-gray100 rounded-4xl p-3.5">
                        <div className="flex items-center justify-between gap-10">
                            <div className="xl:flex-1 pl-0.5">
                                <Link href="/" className='block w-fit relative z-51'>
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
                                    <HeaderNav toggleCollapse={toggleCollapse} />
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
