"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// 1. Define TypeScript interface for slides
type Slide = {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
};

// 2. Create props interface for the component
interface SlideProps {
  slides: Slide[];
  autoplay?: boolean;
  interval?: number; 
}

// 3. Basic component structure
function Slider({ slides, autoplay = true , interval = 3000 }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Extract Navigation Logic
  const goToPrev = function () {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const goToNext = function () {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const goToSlide = function (index: number) {
    setCurrentSlide(index);
  };

  // Auto-Play Functionality
  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval( goToNext ,interval);

    return () => clearTimeout(timer);
  }, [interval, currentSlide, autoplay]);

  return (
    <div className="relative overflow-hidden  min-h-[70vh] md:min-h-[80vh] bg-gray-950">
      {/* Slides container with translateX animation */}
      <div
        className={`flex transition-transform ease-in-out duration-300 `}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-full flex flex-shrink-0 flex-col gap-4 md:flex-row md:gap-4 bg-balck`}
          >
            {/* text */}
            <div className="flex flex-col p-6 justify-center items-center text-center md:w-1/2 md:px-12 md:items-center md:justify-center  ">
              <h2
                className="text-lg sm:text-xl md:text-3xl font-light mb-2 text"
              >{slide.description}</h2>
              <h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-shadow-white"
              >{slide.title}</h1>
              <Link href={slide.url}>
                <button
                    className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-full transition-colors inline-block w-fit mx-auto md:mx-0"
                >Shop Now!</button>
              </Link>
            </div>

            {/* image */}
            <div className="md:w-1/2 flex flex-1 md:top-0 md:right-0">
              <Image
                src={slide.img}
                alt={slide.title}
                width={500}
                height={300}
                priority={slides[currentSlide].id === slide.id}
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between  p-4 mt-3">
        <button
          className="bg-orange-600 p-4 border-l-4 hover:border-l-0  cursor-pointer font-semibold text-lg disabled:opacity-50  ml-25 mt-10  "
          onClick={() => goToPrev()}
        >
          Previous
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2 mb-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`go to slide number ${index + 1}`}
              className={`w-3 h-3  rounded-full ${
                currentSlide === index ? "bg-orange-600" : "bg-white"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <button
          className="bg-orange-600 p-4 border-r-4 hover:border-r-0 cursor-pointer font-semibold text-lg disabled:opacity-50 mr-20 mt-10 "
          onClick={() => goToNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
