'use client'
import { useParams } from "next/navigation"


function ProductPage () {
    const { slug } = useParams();
  return (
    <div>
      product : { slug }
    </div>
  )
}

export default ProductPage 
