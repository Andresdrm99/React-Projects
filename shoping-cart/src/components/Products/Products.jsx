import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from "../icons"
import { useCart } from '../../hooks/useCart'

export function Products({products}){
  const {addToCart, removeFromCart, cart} = useCart()

  const checkProductInCart = product =>{
    return cart.some(item => item.id === product.id)
  }

  return (
    <>
      <div className='products'>
        <ul>
          {products.slice(0,9).map(product=> {
            const isProductInCart = checkProductInCart(product)
            return (
            <li key={product.id}>
              <img src={product.thumbnail} ></img>
              <div className='info'>
                <div className='data-price'>
                  <h3>{product.title}</h3>
                  <strong>${product.price}</strong>
                </div>
                  <button className='addToCart' onClick={()=>{ !isProductInCart ? addToCart(product): removeFromCart(product)}}> { !isProductInCart ? <AddToCartIcon/> : <RemoveFromCartIcon/> }</button>
                </div>
            </li>
          )})}
        </ul>
      </div>
    </>
  )
}
