import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "../icons";
import './Cart.css'
export function Cart(){
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
                    <li>
                        <img 
                            src="https://icon.co.cr/cdn/shop/files/IMG-14858891_8facf27e-f246-4e5a-825b-7cafa6690219.jpg?v=1729269481"
                            alt="Iphone 16 pro"
                        />
                        <div className="product-cart-info">
                            <p><strong>
                                Iphone 16 Pro
                            </strong></p>
                            <p> Qty: 1 </p>
                        </div>

                        <footer>
                            <p>
                                $1100
                            </p>
                            <button>
                                +
                            </button>
                            <button>
                                <RemoveFromCartIcon/>
                            </button>
                        </footer>
                    </li>
                </ul>
            </aside>
        </>
    )
}