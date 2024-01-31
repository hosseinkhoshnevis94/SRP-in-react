import useProducts from './useProducts'
import Product from './Product'
import { IProduct } from './types'
import { Rating } from 'react-simple-star-rating'
import filterProducts from './filterProducts'
import useFilter from './useFilter'

const SrpAfter = () => {
  const{products,error} = useProducts()
  const { filterRate,handleRating} = useFilter()
  const filteredProducts = filterProducts(products,filterRate)
  const handleAddToCart = (title:string)=>
  alert(`${title} was added to cart!`)
   
  if(error) return <div  className="flex justify-center items-center text-red-500 w-full h-full">{error}</div>
  return (
    <div className="flex flex-col h-full">
    <div className="flex  flex-col justify-center items-center">
      <Rating
        initialValue={filterRate}
        SVGclassName="inline-block"
        onClick={handleRating}
      />
    </div>
    <div className="h-full flex flex-wrap justify-center">
      {filteredProducts.map((product: IProduct) => (
       <Product key={product.id} product={product} onAddToCart={()=>handleAddToCart(product.title)} />
      ))}
    </div>
  </div>
  )
}

export default SrpAfter