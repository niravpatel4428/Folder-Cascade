import React from "react";
import lightning from "@/public/images/svg/lightning.svg"
import Image from "next/image";

const features = [
    "One-time purchase.",
    "Future updates included.",
    "No subscription",
    "No tracking",
    "Your system, your rules.",
];

const Pricing = () => {
    return (
        <section className="py-10 md:py-15 2xl:py-20">
            <div className="container">
                <div className="bg-[#FFF6EC] p-4 md:p-6 2xl:p-7.5 border border-cs-orange-100/30 rounded-[50px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 items-center">

                        {/* LEFT */}
                        <div className="space-y-5 h-full flex flex-col justify-between 2xl:pr-10">
                            <div className="size-20 lg:size-35 rounded-full bg-white flex items-center justify-center p-4 lg:p-7">
                                <Image src={lightning} alt="lightning" className="w-full h-full" />
                            </div>

                            <div className="space-y-7.5">
                                <div className="space-y-2.5">
                                    <h5 className="text-black font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-[32px] leading-normal tracking-tighter">
                                        Folder Cascade
                                    </h5>

                                    <p className="font-normal text-base md:text-lg 2xl:text-xl leading-normal tracking-tighter">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry’s
                                        standard dummy text ever since the 1500s.
                                    </p>
                                </div>

                                <p className="text-black font-medium text-4xl md:text-[50px] leading-tighter tracking-tight">€4.99</p>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="bg-white rounded-30 p-4 md:p-6 2xl:p-7.5 space-y-6">
                            <ul className="space-y-1 xl:space-y-2.5">
                                {features.map((item) => (
                                    <li key={item} className="flex items-center gap-2.5 py-2 2xl:py-3">
                                        <span className="size-5 md:size-6.5 rounded-lg bg-cs-sky-50 flex items-center justify-center text-white text-xs">
                                            ✓
                                        </span>
                                        <span className="text-black font-medium text-base md:text-xl 2xl:text-2xl leading-normal tracking-tighter">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full bg-cs-orange-100 hover:bg-cs-orange-100/90 transition-colors text-white rounded-2xl p-2.5 font-semibold text-xl tracking-tighter leading-normal">
                                Purchase Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
