import Image from "next/image";
import { Product } from "./types";
interface ProductListProps {
  productList: Product[];
}

function ProductList({ productList }: ProductListProps) {
  return (
    <div>
      <button className="font-bold text-2xl mb-5 mt-5 p-3 hover:text-amber-600">Featured Products</button>
    <div className="flex flex-wrap">
      {productList.map((product) => (
        // individual product
        <div className="flex flex-col">
          {/* image part  */}
          <div>
            <Image
              src={product.images[0]}
              alt={product.title}
              width={40}
              height={40}
            />
            <Image
              src={product.images[1]}
              alt={product.title}
              width={40}
              height={40}
            />
          </div>

          {/* text  */}
          <div className="flex gap-2 mt-2 mb-2">
            <h2>{product.title}</h2>
            <span>${product.price}</span>
          </div>

          {/* add to cart  */}
          <button className="bg-orange-600 p-4 border-r-4 hover:border-r-0 cursor-pointer font-semibold text-lg disabled:opacity-50">Add to Cart</button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProductList;
