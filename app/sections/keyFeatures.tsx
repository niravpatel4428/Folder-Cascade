import icon1 from "@/public/images/svg/key-1.svg"
import icon2 from "@/public/images/svg/key-2.svg"
import icon3 from "@/public/images/svg/key-3.svg"
import icon4 from "@/public/images/svg/key-4.svg"
import Image from "next/image";

const features = [
    {
        title: "Apply labels to all Subfolders",
        description:
            "Apply labels to all subfolders automatically for consistent organization and easier navigation.",
        icon: icon1,
    },
    {
        title: "Preview Changes Before Applying",
        description:
            "Preview changes before applying them to ensure everything looks right and avoid mistakes.",
        icon: icon2,
    },
    {
        title: "Fully offline and Private",
        description:
            "Works fully offline, keeping all your data private and securely on your device.",
        icon: icon3,
    },
    {
        title: "No Setup, Works instantly",
        description:
            "No setup required — works instantly as soon as you use it.",
        icon: icon4,
    },
];

const KeyFeatures = () => {
    return (
        <section id="features" className="bg-cs-gray50 py-10 md:py-20 xl:py-30 3xl:py-37.5">
            <div className="container">
                <div className="space-y-10 xl:space-y-12">
                    <h3 className="text-black font-medium leading-tighter text-40 xs:text-5xl md:text-6xl 2xl:text-64 tracking-tighter text-center">
                        Key <span className="tracking-tighter heading">Features</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-30 border border-[#DDDDDD] p-px hover:bg-linear-to-r hover:from-cs-orange-100 hover:to-white group transition-all duration-300 overflow-hidden"
                            >
                                <div className="bg-white rounded-[29px] p-6 h-full flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <h3 className="text-black font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-[32px] leading-normal tracking-tighter 2xl:pr-5 group-hover:text-cs-orange-100 transition-all duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="font-normal text-base md:text-lg 2xl:text-xl leading-normal tracking-tighter">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div
                                        className={`bg-cs-sky-100 mt-20 md:mt-25 size-17.5 rounded-[14px] p-2.5 flex items-center justify-center text-white text-xl group-hover:bg-cs-orange-100 transition-all duration-300`}
                                    >
                                        <Image src={item.icon} alt="icon" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
