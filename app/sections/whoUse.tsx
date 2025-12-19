import Image from "next/image";
import devImg from "@/public/images/dev.jpg";
import designImg from "@/public/images/design.jpg";
import researchImg from "@/public/images/research.jpg";
import photoImg from "@/public/images/photo.jpg";
import centerImg from "@/public/images/center.jpg";
import img1 from "@/public/images/who-1.jpg";
import img2 from "@/public/images/who-2.jpg";
import img3 from "@/public/images/who-3.jpg";
import img4 from "@/public/images/who-4.jpg";
import centerIcon from "@/public/images/centerIcon.png";

import { StaticImageData } from "next/image";

const sideCardsLeft = [
    {
        title: "Developers",
        desc: "quickly color module trees and service folders",
        img: img1,
    },
    {
        title: "Researchers",
        desc: "visually map folder depth and topic structure",
        img: img2,
    },
];

const sideCardsRight = [
    {
        title: "Designers",
        desc: "organize project assets visually",
        img: img3,
    },
    {
        title: "Photographers",
        desc: "tag shoots and sub-shoots in one step",
        img: img4,
    },
];

const WhoUse = () => {
    return (
        <section className="py-10 md:py-20">
            <div className="container">
                <div className="space-y-10 xl:space-y-12">
                    <h4 className="text-black font-medium leading-tighter text-40 xs:text-5xl md:text-6xl 2xl:text-64 tracking-tighter text-center">
                        Who <span className="heading">Uses This</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-5">
                        {/* LEFT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5">
                            {sideCardsLeft.map((item, i) => (
                                <ImageCard key={i} {...item} />
                            ))}
                        </div>

                        {/* CENTER */}
                        <div className="relative rounded-30 overflow-hidden flex flex-col items-center justify-center  min-h-60 md:min-h-65">
                            {/* background image */}
                            <div className="absolute inset-0 -z-1">
                                <Image
                                    src={centerImg}
                                    alt="Folder Cascade"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/30" />
                            {/* details */}
                            <div className="text-white text-center relative z-2">
                                <div className="w-44 mb-2.5 mx-auto">
                                    <Image src={centerIcon} alt="centerIcon" />
                                </div>
                                <p className="text-white font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-[32px] leading-normal tracking-tighter">Folder Cascade</p>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5">
                            {sideCardsRight.map((item, i) => (
                                <ImageCard key={i} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoUse;

export type WhoUseCard = {
    title: string;
    desc: string;
    img: StaticImageData;
};

type ImageCardProps = WhoUseCard;

const ImageCard: React.FC<ImageCardProps> = ({ img, title, desc }) => {
    return (
        <div className="relative rounded-30 overflow-hidden min-h-60 md:min-h-65 2xl:min-h-72.5 group">
            <Image src={img} alt={title} fill className="object-cover group-hover:scale-110 transition-all duration-700" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
            <div className="absolute left-0 right-0 bottom-0 h-25 backdrop-blur-xs" />

            <div className="absolute bottom-7.5 left-7.5 right-7.5 space-y-1.5 z-3">
                <h4 className="text-white font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-[32px] leading-normal tracking-tighter">{title}</h4>
                <p className="text-white font-normal text-base md:text-lg 2xl:text-xl leading-normal tracking-tighter">{desc}</p>
            </div>
        </div>
    );
};

