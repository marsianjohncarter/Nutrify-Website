export default function Jumbotron() {
    return (
        <section className="bg-emerald-900 relative overflow-hidden md:pt-20 pt-44">
            {/* Background Mockup for Mobile View */}
            <div className="absolute inset-0 md:opacity-0 mt-16 pt-5">
                <div className="relative mx-auto border-slate-600 bg-slate-600 border-[14px] rounded-[2.5rem] h-[400px] w-[200px]">
                    <div className="rounded-[2rem] overflow-hidden w-[172px] h-[372px] bg-gray-800">
                        <img
                            src="/01-nutrify-camera-preview-screenshot.png"
                            className="block w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* Dark overlay to make text more readable on mobile */}
            <div className="absolute inset-0 bg-gray-900 opacity-40 md:hidden"></div>

            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left relative z-10">
                {/* Left Content */}
                <div className="md:w-1/2">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        We invest in the world's potential
                    </h1>
                    <p className="mb-8 text-lg font-normal text-slate-300  backdrop-blur-sm bg-transparent rounded-lg md:text-gray-400 lg:text-xl sm:px-16 md:px-0">
                        Here at Nutrify we focus on markets where technology,
                        innovation, and capital can unlock long-term value and
                        drive economic growth.
                    </p>
                    <div >
                        <a
                            type="button"
                            className="cursor-pointer inline-flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl"
                            href="https://apps.apple.com/au/app/nutrify-whole-food-tracker/id1664020890"
                        >
                            <div className="mr-4">
                                <svg viewBox="0 0 384 512" width="30">
                                    <path
                                        fill="currentColor"
                                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs">Download on the</div>
                                <div className="-mt-1 font-sans text-xl font-semibold">
                                    App Store
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right iPhone Mockup with Side Buttons for Larger Viewports */}
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 hidden md:flex relative">
                    <div className="relative mx-auto border-slate-600 bg-slate-600 border-[14px] rounded-[2.5rem] h-[400px] w-[200px] shadow-xl">
                        {/* Side Buttons */}
                        <div className="h-[32px] w-[3px] bg-gray-500 absolute -start-[17px] top-[72px] rounded-s-lg" />
                        <div className="h-[46px] w-[3px] bg-gray-500 absolute -start-[17px] top-[124px] rounded-s-lg" />
                        <div className="h-[46px] w-[3px] bg-gray-500 absolute -start-[17px] top-[178px] rounded-s-lg" />
                        <div className="h-[64px] w-[3px] bg-gray-500 absolute -end-[17px] top-[142px] rounded-e-lg" />
                        {/* Mockup Image */}
                        <div className="rounded-[2rem] overflow-hidden w-[172px] h-[372px] bg-gray-800">
                            <img
                                src="/01-nutrify-camera-preview-screenshot.png"
                                className="block w-full h-full"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
