// this the home page :

import ProductList from '@/components/ProductList';
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


export const productList = [
  {
    id: 1,
    title: "TrailBlazer Mountain Bike",
    description: "Durable mountain bike with 21-speed gear system and front suspension for rugged terrains.",
    price: 599.99,
    images: [
      "/TrailBlazer Mountain Bike1.jpg",
      "/TrailBlazer Mountain Bike2.jpg",
      
    ],
  },
  {
    id: 2,
    title: "CityCruiser Hybrid Bike",
    description: "Perfect for urban commutes with a lightweight aluminum frame and comfortable seating.",
    price: 449.50,
    images: [
      "/CityCruiser Hybrid Bike1.jpg",
      "/CityCruiser Hybrid Bike2.jpg"
    ],
  },
  {
    id: 3,
    title: "Speedster Road Bike",
    description: "Aerodynamic frame and carbon fork for serious road cyclists seeking speed and agility.",
    price: 899.00,
    images: [
      "/Speedster Road Bike1.jpg",
      "/Speedster Road Bike2.jpg",
      
    ],
  },
  {
    id: 4,
    title: "EcoRider Electric Bike",
    description: "Electric-assist bike with 60km range and smart LCD display. Eco-friendly commuting made easy.",
    price: 1199.99,
    images: [
      "/EcoRider Electric Bike1.jpg",
      "/EcoRider Electric Bike2.jpg",
      "/EcoRider Electric Bike3.jpg",
    ],
  },
  {
    id: 5,
    title: "KidsFun 14” Bike",
    description: "Colorful and safe beginner bike for children aged 3–6 with training wheels and bell.",
    price: 179.95,
    images: [
      "/KidsFun 14” Bike1.jpg",
      "/KidsFun 14” Bike2.jpg",
      "/KidsFun 14” Bike3.jpg"
    ],
  }
];

function page() {
  return (
    <div>
      <Slider slides={slides}/>
      <ProductList productList={productList}/>
    </div>
  )
}

export default page
