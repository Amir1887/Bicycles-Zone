'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



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
function Slider({ slides } : SlideProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="relative overflow-hidden">
         {/* Slides container with translateX animation */}
         <div className={`flex transition:transform transform:translateX(-${currentSlide * 100})% ease-in-out duration-300 `}
         >
        {slides.map((slide) => (
            <div key={slide.id} className="w-full flex flex-shrink-0 flex-col gap-4 md:flex-row md:gap-4 ">

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
    </div>
  )
}

export default Slider
