"use client";

import React, { useRef, useState } from "react";

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <section className="bg-cs-gray50 py-10 md:py-20 xl:py-30 3xl:py-37.5">
            <div className="container">
                <div className="relative w-full max-w-302.5 mx-auto">

                    {/* Video */}
                    <video
                        ref={videoRef}
                        src="/images/hero.mp4"
                        muted
                        playsInline
                        onClick={togglePlay}
                        className="w-full h-full rounded-30 min-h-62 object-cover cursor-pointer"
                    />

                    {/* Overlay gradient */}
                    {!isPlaying && (
                        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent rounded-30 pointer-events-none" />
                    )}

                    {/* Play Button */}
                    {!isPlaying && (
                        <button
                            onClick={togglePlay}
                            className="absolute inset-0 flex items-center justify-center z-10"
                            aria-label="Play video"
                        >
                            <div className="relative flex items-center justify-center">

                                <span className="absolute h-19.5 w-19.5 rounded-full bg-blue-900/25 animate-pulse" />
                                <span className="absolute h-15 w-15 rounded-full bg-blue-800/40 animate-pulse" />

                                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 shadow-lg">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1172 6.11197C14.4505 6.88177 14.4505 8.80627 13.1172 9.57607L2.99984 15.4173C1.66651 16.1871 -0.000160217 15.2249 -0.000160217 13.6853V2.00276C-0.000160217 0.463164 1.66651 -0.499085 2.99984 0.270715L13.1172 6.11197Z" fill="white" />
                                    </svg>

                                </span>

                            </div>
                        </button>
                    )}

                </div>
            </div>
        </section>
    );
};

export default VideoSection;
