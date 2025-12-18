import Image from "next/image";
import Link from "next/link";

import bigIcon from "@/public/images/svg/footer-bigIcon.svg";
import mailIcon from "@/public/images/svg/mailIcon.svg";

const topNavLinks = [
    { label: "Home", href: "/" },
    { label: "Social", href: "/" },
    { label: "Features", href: "/" },
    { label: "Pricing", href: "/" },
    { label: "FAQ", href: "/" },
];

const bottomLinks = [
    { label: "Support", href: "/" },
    { label: "Terms", href: "/" },
    { label: "Privacy", href: "/" },
    { label: "Contact", href: "/" },
];

const Footer = () => {
    return (
        <footer className="relative pt-10 md:pt-15 2xl:pt-20 pb-7.5 bg-cs-gray50">
            <div className="container">

                {/* Top row */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 lg:gap-6">

                    {/* Email */}
                    <Link
                        href="mailto:loremipsum@gmail.com"
                        className="w-fit flex items-center gap-3 text-lg font-normal leading-normal tracking-tighter group-hover:text-black group transition-all duration-300"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cs-orange-100">
                            <Image src={mailIcon} alt="Mail" />
                        </span>
                        <span className="group-hover:text-black transition-all duration-300">LoremIpsum@gmail.com</span>
                        <span className="group-hover:text-black transition-all duration-300">↗</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex flex-wrap max-md:justify-center gap-x-6 gap-y-3 md:gap-10 2xl:gap-18.5 text-sm text-black/60">
                        {topNavLinks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-lg font-normal leading-normal tracking-tighter hover:text-black transition-all duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Brand */}
                <Link href="/" className="block my-10 md:my-15 2xl:my-20">
                    <Image
                        src={bigIcon}
                        alt="Folder Cascade"
                        className="h-full w-full"
                    />
                </Link>

                {/* Bottom row */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 max-md:text-center">
                    <p className="text-lg font-normal leading-normal tracking-tighter">Copyright © 2025 Folder Cascade. All Rights Reserved.</p>

                    <div className="flex flex-wrap max-md:justify-center items-center max-md:gap-y-3 gap-6 2xl:gap-9">
                        {bottomLinks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-lg font-normal leading-normal tracking-tighter hover:text-black transition-all duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
