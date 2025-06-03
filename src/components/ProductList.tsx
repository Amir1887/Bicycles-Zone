import { Product } from "./types"
interface ProductListProps {
    productList: Product[]
}

function ProductList({ productList }:  ProductListProps ){
  return (
    <div>
      {productList.map((p) => (
        <h1>{p.title}</h1>
      ))}
    </div>
  )
}

export default ProductList
