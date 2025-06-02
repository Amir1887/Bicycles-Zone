// this the home page :

import Slider from '@/components/Slider'
import React from 'react'

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/textSlider1.png",
    url: "/",
    bg: "bg-gradient-to-r from-orange-150 to-orange-200",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/textSlider2.png",
    url: "/",
    bg: "bg-gradient-to-r from-orange-150 to-orange-200",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/textSlider3.png",
    url: "/",
    bg: "bg-gradient-to-r from-orange-150 to-orange-200",
  },
];

function page() {
  return (
    <div>
      <Slider slides={slides}/>
    </div>
  )
}

export default page
