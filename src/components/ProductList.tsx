//   {
//     id: 1,
//     title: "TrailBlazer Mountain Bike",
//     description: "Durable mountain bike with 21-speed gear system and front suspension for rugged terrains.",
//     price: 599.99,
//     images: [
//       "/TrailBlazer Mountain Bike1.jpg",
//       "/TrailBlazer Mountain Bike2.jpg",
      
//     ],
//   }

 type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
}

interface ProductListProps  {
    features: Product[]
}

function ProductList({ productList }:  ProductListProps ){
  return (
    <div>
      produtlist
    </div>
  )
}

export default ProductList
