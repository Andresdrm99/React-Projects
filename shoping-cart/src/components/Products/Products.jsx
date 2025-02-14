import './Products.css'
import { AddToCartIcon } from "../icons"


export function Products({products}){
  return (
    <>
      <div className='products'>
        <ul>
          {products.slice(0,9).map(product=>(
            <li key={product.id}>
              <img src={product.thumbnail} ></img>
              <div>
                <h3>{product.title}</h3>
                <span>${product.price}</span>
              </div>
              <div>
                <button><AddToCartIcon/></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
