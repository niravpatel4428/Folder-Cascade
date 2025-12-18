"use client"


import { useRef, useState } from "react";

const faqs = [
    {
        q: "Does it modify my files?",
        a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        q: "Does it work on external drivers?",
        a: "Yes, it works seamlessly with external drives without modifying their structure.",
    },
    {
        q: "Will it mess up my existing labels?",
        a: "No. All existing labels remain untouched and fully intact.",
    },
    {
        q: "Does it require permissions?",
        a: "Minimal permissions are required only to read file metadata.",
    },
    {
        q: "Does it work offline?",
        a: "Yes, all features work completely offline.",
    },
    {
        q: "Is it a Finder Extension?",
        a: "Yes, it integrates as a native Finder Extension.",
    },
];


const FaqItem = ({
    item,
    isOpen,
    onClick,
}: {
    item: { q: string; a: string };
    isOpen: boolean;
    onClick: () => void;
}) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="border-b border-black/10">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between gap-2 py-3.5 text-left"
            >
                <span className="text-base leading-5.5 font-medium text-black">
                    {item.q}
                </span>

                <p className="flex-none">
                    <span
                        className={`flex size-10 items-center justify-center rounded-md bg-cs-orange-100 transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                            }`}
                    >
                        <Arrow />
                    </span>
                </p>
            </button>

            <div
                style={{
                    height: isOpen ? contentRef.current?.scrollHeight : 0,
                }}
                className="overflow-hidden transition-[height] duration-300 ease-in-out"
            >
                <div ref={contentRef} className="pb-5 text-base font-regular leading-normal tracking-tighter">
                    {item.a}
                </div>
            </div>
        </div>
    );
};



const Faq = () => {
    const [active, setActive] = useState<number | null>(0);
    return (
        <>
            <section className='relative py-10 md:py-15 2xl:py-20'>
                <div className="container">
                    <div className="w-full max-w-337.25 mx-auto">
                        <div className="mb-10 md:mb-12.5">
                            <h6 className="text-black font-medium leading-tighter text-5xl md:text-6xl 2xl:text-64 tracking-tighter text-center">
                                Frequently <span className="heading">Asked Questions</span>
                            </h6>
                        </div>

                        {/* add faq design here */}
                        <div className="relative">
                            {faqs.map((item, index) => (
                                <FaqItem
                                    key={index}
                                    item={item}
                                    isOpen={active === index}
                                    onClick={() =>
                                        setActive(active === index ? null : index)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq


const Arrow = () => {
    return (
        <>
            <svg className="group-hover:invert transition-all duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9012 5.3545C12.6366 5.13278 12.2424 5.1675 12.0207 5.43204C11.7989 5.69659 11.8337 6.0908 12.0982 6.31252L15.7523 9.37516H3.33301C2.98783 9.37516 2.70801 9.655 2.70801 10.0002C2.70801 10.3453 2.98783 10.6252 3.33301 10.6252H15.7513L12.0982 13.6879C11.8336 13.9097 11.7989 14.3038 12.0208 14.5684C12.2425 14.8329 12.6367 14.8676 12.9012 14.6458L16.5623 11.5764C17.5343 10.7617 17.5343 9.23775 16.5623 8.423L12.9012 5.3545Z" fill="white" />
            </svg>

        </>
    )
}