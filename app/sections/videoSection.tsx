import React from 'react'

const VideoSection = () => {
    return (
        <>
            <section className="bg-cs-gray50 py-10 md:py-20 xl:py-30 3xl:py-37.5">
                <div className="container">
                    <div className="relative w-full max-w-302.5 mx-auto">
                        <video src="/images/hero.mp4" autoPlay muted playsInline className='w-full h-full rounded-30 min-h-62 object-cover' ></video>
                        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent rounded-30"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoSection
