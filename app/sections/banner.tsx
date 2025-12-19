"use client";
import BtnAppStore from '../components/btnAppStore'
import icon from "@/public/images/svg/android.svg"
import useIsMac from '../components/useIsMac';

const Banner = () => {
    const isMac = useIsMac();
    return (
        <>
            <section id='home' className="bg-cs-gray50 pt-27 pb-10 md:pb-20 xl:pb-30 3xl:pb-37.5">
                <div className="container">
                    <div className="pt-13.5 space-y-13.5 text-center w-full max-w-250 mx-auto">
                        <div>
                            <div className="space-y-4">
                                <h1 className='text-black font-medium leading-tighter text-40 xs:text-5xl md:text-6xl 2xl:text-64 tracking-tighter'>Color entire folder trees <span className='tracking-tighter heading'>In one Click.</span></h1>

                                <div className="space-y-2 text-black text-22 font-medium tracking-tighter leading-normal">
                                    <p>macOS doesn&apos;t cascade labels, FolderCascade does.</p>
                                </div>
                            </div>
                            <div className="mt-7.5 flex justify-center">
                                {isMac ? (
                                    <BtnAppStore label='Download on the Mac App Store' icon={icon} />
                                ) : (
                                    <BtnAppStore label="Send link to my Mac" icon={icon} href="mailto:?subject=App%20Link&body=Check%20out%20this%20app%20on%20the%20Mac%20App%20Store.%20[Insert%20link%20here]" />
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="bg-cs-orange-100 w-fit py-1.5 md:py-4 px-8 md:px-12.5 mx-auto rounded-t-full text-center max-sm:w-60/100">
                                <p className="text-white text-xs sm:text-base md:text-xl 2xl:text-2xl font-semibold tracking-tighter leading-none">Mac-only</p>
                            </div>
                            <div className="w-full max-w-305 mx-auto bg-linear-to-l from-white to-cs-orange-50 rounded-30 overflow-hidden p-1.25">
                                <video src="/images/hero.mp4" autoPlay muted playsInline className='w-full h-full rounded-[28px] min-h-62 object-cover' ></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
