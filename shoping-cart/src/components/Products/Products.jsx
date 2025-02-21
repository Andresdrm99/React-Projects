import './Products.css'
import { AddToCartIcon } from "../icons"
import { useCart } from '../../hooks/useCart'


export function Products({products}){
  const {addToCart} = useCart()
  return (
    <>
      <div className='products'>
        <ul>
          {products.slice(0,9).map(product=>(
            <li key={product.id}>
              <img src={product.thumbnail} ></img>
              <div className='info'>
                <div className='data-price'>
                  <h3>{product.title}</h3>
                  <strong>${product.price}</strong>
                </div>
                  <button className='addToCart' onClick={()=>addToCart(product)}><AddToCartIcon/></button>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
