import Image from "next/image";
import { Product } from "./types";
interface ProductListProps {
  productList: Product[];
}

function ProductList({ productList }: ProductListProps) {
  return (
    <div>
      <h1>Featured Products</h1>
      {productList.map((product) => (
        // individual product
        <div>
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
          <div>
            <h2>{product.title}</h2>
            <span>{product.price}</span>
          </div>

          {/* add to cart  */}
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
