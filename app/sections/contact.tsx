import bg from "@/public/images/contact-bg.jpg"
import Image from "next/image"
import Link from "next/link"

const Contact = () => {
    return (
        <>
            <section className="bg-cs-gray50 py-10 md:py-20 xl:py-30 3xl:py-37.5">
                <div className="container">
                    <div className="w-full max-w-337.25 mx-auto">
                        <div className="relative rounded-20 py-10 md:py-15 2xl:py-20 px-5 md:px-8 2xl:px-10">
                            <div className="text-center relative z-3 space-y-12.5">
                                <h6 className='text-center text-white font-medium leading-tighter text-40 xs:text-5xl md:text-6xl 2xl:text-64 tracking-tighter'>Get it on
                                    <br />  <span className="bg-linear-to-r from-white to-[#B5D6E3] text-transparent bg-clip-text font-playfair italic">the Mac App Store</span>
                                </h6>

                                <Link href="/" className="bg-white rounded-2xl w-fit mx-auto py-2.5 pr-2.5 pl-5 flex items-center gap-2.5 text-black text-xl font-semibold tracking-tighter group hover:bg-cs-orange-100 hover:text-white transition-all duration-300">Contact Us
                                    <span className="bg-cs-orange-100 rounded-md size-10 flex justify-center items-center group-hover:bg-white transition-all duration-300">
                                        <Arrow />
                                    </span>
                                </Link>
                            </div>


                            {/* image */}
                            <div className="absolute inset-0 z-1">
                                <Image src={bg} alt="bg" className="h-full w-full object-cover rounded-20" />
                            </div>
                            {/* gradient */}
                            <div className="absolute inset-0 z-2 bg-radial from-black/0 to-black/50 rounded-20"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

const Arrow = () => {
    return (
        <>
            <svg className="group-hover:invert transition-all duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9012 5.3545C12.6366 5.13278 12.2424 5.1675 12.0207 5.43204C11.7989 5.69659 11.8337 6.0908 12.0982 6.31252L15.7523 9.37516H3.33301C2.98783 9.37516 2.70801 9.655 2.70801 10.0002C2.70801 10.3453 2.98783 10.6252 3.33301 10.6252H15.7513L12.0982 13.6879C11.8336 13.9097 11.7989 14.3038 12.0208 14.5684C12.2425 14.8329 12.6367 14.8676 12.9012 14.6458L16.5623 11.5764C17.5343 10.7617 17.5343 9.23775 16.5623 8.423L12.9012 5.3545Z" fill="white" />
            </svg>

        </>
    )
}