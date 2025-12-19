import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface BtnAppStoreProps {
    href?: string;
    label?: string;
    mainClass?: string;
    icon: StaticImageData;
    usePlayfair?: boolean;
}

const BtnAppStore = ({
    href = "/",
    label,
    icon,
    mainClass
}: BtnAppStoreProps) => {
    return (
        <Link
            href={href}
            className={`
        w-fit
        py-2.5 pl-5 pr-2.5
        flex items-center gap-2.5
        bg-cs-orange-100 text-white
        font-semibold text-base md:text-lg 3xl:text-xl
        tracking-tight rounded-2xl
        hover:bg-cs-orange-100/90
        transition-all duration-300 ${mainClass}
      `}
        >
            {label}

            <span className="rounded-md bg-white size-10 flex-none flex items-center justify-center">
                <Image
                    src={icon}
                    alt="app store icon"
                    className="size-5"
                />
            </span>
        </Link>
    );
};

export default BtnAppStore;
