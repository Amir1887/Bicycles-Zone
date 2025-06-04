import Image from "next/image";
import { Product } from "./types";
interface ProductListProps {
  productList: Product[];
}

function ProductList({ productList }: ProductListProps) {
  if(!productList) {
    return(
    <div className="container mx-auto px-3 py-3 text-center">
      <p>No available products</p>
    </div>
    )
  }
  return (
    <div className="mx-auto px-6 py-8 container">
      <h2 className="font-extrabold  text-2xl md:text-3xl text-center md:text-left  mb-5 mt-5 p-3">Featured Products</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {productList.map((product) => (
        // individual product
        <article  
        key={product.id}
        aria-label={product.title}
        className="border rounded-md shadow-sm transition:shadow hover:shadow-lg p-4 bg-black group relative cursor-pointer ">
          {/* image part  */}
          <div className="relative aspect-square">
            <Image
              src={product.images[0]}
              className="object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-300 "
              alt={product.title}
              fill
            />
            <Image
              src={product.images[1]}
              className="object-cover rounded-md"
              alt={product.title}
              fill
            />
          </div>

      {/* Text */}
          <div className="flex justify-between mt-4">
            <span className="font-semibold">{product.title}</span>
            <span className="text-orange-600 font-bold">${product.price}</span>
          </div>

          {/* add to cart  */}
          <div className="flex justify-center">
          <button className=" bg-orange-600 p-4 border-r-4 hover:border-r-0 rounded-md mt-3 cursor-pointer font-semibold text-lg disabled:opacity-50">Add to Cart</button>
          </div>
        </article>
      ))}
    </div>
    </div>
  );
}

export default ProductList;
