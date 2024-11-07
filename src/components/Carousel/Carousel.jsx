
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2500, stopOnInteraction: false }),
    ]);

    const slides = [
        {
            title: "Use your camera to identify foods.",
            description:
                "Here at Nutrify we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
            image: "/01-nutrify-camera-preview-screenshot.png",
        },
        {
            title: "Identify more than 510 whole foods.",
            description:
                "We support companies that are making a difference in tech and innovation.",
            image: "/02-nutrify-photo-taken-of-pineapple-screenshot.png",
        },
        {
            title: "And learn about their nutrition.",
            description:
                "We support companies that are making a difference in tech and innovation.",
            image: "/03-nutrify-pineapple-nutrition-information.png",
        },
        {
            title: "Set calorie and macronutrient goals.",
            description:
                "We support companies that are making a difference in tech and innovation.",
            image: "00-nutrify-summary-screenshot.png",
        },

    ];

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="embla" ref={emblaRef}>

            <div className="embla__container">
                {slides.map((_, index) => (
                                <div className="embla__slide" key={index}>
                                <div className="md:1/2 flex justify-center mt-8 md:mt-0  md:flex relative">
                                    <div className="relative mx-auto border-slate-600 bg-slate-600 border-[14px] rounded-[2.5rem] h-[400px] w-[200px] shadow-xl">
                                        {/* Side Buttons */}
                                        <div className="h-[32px] w-[3px] bg-gray-500 absolute -start-[17px] top-[72px] rounded-s-lg" />
                                        <div className="h-[46px] w-[3px] bg-gray-500 absolute -start-[17px] top-[124px] rounded-s-lg" />
                                        <div className="h-[46px] w-[3px] bg-gray-500 absolute -start-[17px] top-[178px] rounded-s-lg" />
                                        <div className="h-[64px] w-[3px] bg-gray-500 absolute -end-[17px] top-[142px] rounded-e-lg" />
                                        <div className="rounded-[2rem] overflow-hidden w-[172px] h-[372px] bg-gray-800">
                                            <img
                                                src={slides[index].image}
                                                className="block w-full h-full"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="base-font font-bold text-center p-10">{slides[index].title}</p>
                            </div>
                ))}
            </div>
            <div className="flex justify-center">
            <button className="embla__prev py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={scrollPrev}>
                Prev
            </button>
            <button className="embla__next py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={scrollNext}>
                Next
            </button>
            </div>

        </div>
    );
}

export default Carousel;