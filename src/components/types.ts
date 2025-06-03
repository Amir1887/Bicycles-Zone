// 1. Define TypeScript interface for slides
export type Slide = {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
};

export  type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
}