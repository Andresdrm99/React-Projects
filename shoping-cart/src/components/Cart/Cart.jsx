import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "../icons";
import './Cart.css'
import { useCart } from "../../hooks/useCart";

export function CartItem( {thumbnail, title, price, quantity, addToCart, removeFromCart}){
    return (<li>
        <img 
            src={thumbnail}
            alt={title}
        />
        <div className="product-cart-info">
            <p><strong>
               {title}
            </strong></p>
            <p> Qty: {quantity} </p>
        </div>

        <footer>
            <p>
               {price * quantity}
            </p>
            <button onClick={addToCart}>
                +
            </button>
            <button onClick={removeFromCart}>
                <RemoveFromCartIcon/>
            </button>
        </footer>
    </li>)
}

export function Cart(){
    const {cart, addToCart , removeFromCart, clearCart} = useCart()
    const cartCheckboxId = useId()
    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input  id={cartCheckboxId} type="checkbox" hidden/>

            <aside className="cart">
                <h2>My cart</h2>

                <ul>
                    {cart.map(product =>(
                        <CartItem 
                            key={product.id} 
                            addToCart={()=>{addToCart(product)}} 
                            removeFromCart = {() => {removeFromCart(product)}}
                            {... product}
                        />
                    ) )}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}