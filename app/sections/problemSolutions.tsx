import Image from "next/image";
import img1 from "@/public/images/problem-solution-1.jpg";
import img2 from "@/public/images/problem-solution-2.jpg";

const problemSolutionsData = [
    {
        id: 1,
        image: img1,
        alt: "Default macOS behavior",
        title: "Default macOS behavior",
    },
    {
        id: 2,
        image: img2,
        alt: "FolderCascade",
        title: "FolderCascade",
    },
];

const ProblemSolutions = () => {
    return (
        <>
            <section id="social" className="py-10 md:py-15 2xl:py-20">
                <div className="container">
                    <div className="space-y-10 xl:space-y-12">
                        <h2 className="text-black font-medium leading-tighter text-5xl md:text-6xl 2xl:text-64 tracking-tighter text-center">
                            Problem <span className="tracking-tighter heading">Solutions</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {problemSolutionsData.map(({ id, image, alt, title }) => (
                                <div key={id} className="bg-cs-gray50 rounded-30">
                                    <div>
                                        <Image
                                            src={image}
                                            alt={alt}
                                            className="object-cover object-center rounded-30"
                                        />
                                    </div>
                                    <div className="py-7.5 px-3 text-center">
                                        <p className="text-black font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-40 tracking-tighter leading-tighter">
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ProblemSolutions;
