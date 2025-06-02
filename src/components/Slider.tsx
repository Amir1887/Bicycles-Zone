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
}

// 3. Basic component structure
function Slider({ slides }: SlideProps) {
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
    const timer = setInterval(() => {
      goToPrev();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Slides container with translateX animation */}
      <div
        className={`flex transition:transform ease-in-out duration-300 `}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex flex-shrink-0 flex-col gap-4 md:flex-row md:gap-4 "
          >
            {/* text */}
            <div>
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link href={slide.url}>
                <button>Shop Now!</button>
              </Link>
            </div>

            {/* image */}
            <div>
              <Image
                src={slide.img}
                alt={slide.title}
                width={500}
                height={300}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between  p-4 mt-3">
        <button
          className="bg-orange-600 p-4 border-l-4 hover:border-l-0  cursor-pointer font-semibold text-lg disabled:opacity-50"
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
          className="bg-orange-600 p-4 border-r-4 hover:border-r-0 cursor-pointer font-semibold text-lg disabled:opacity-50"
          onClick={() => goToNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
