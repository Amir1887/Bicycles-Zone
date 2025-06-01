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
        
    </div>
  )
}

export default Slider
