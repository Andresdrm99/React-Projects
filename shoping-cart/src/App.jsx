import { Header } from "./components/Header/Header.jsx"
import { Products  } from "./components/Products/Products.jsx"
import { useFilter } from "./hooks/useFilters.js"
import {products as initialProducts} from './mocks/data.json'
import { Footer } from "./components/Footer/Footer.jsx"
import { useState } from "react"
import { Cart } from "./components/Cart/Cart.jsx"
import { useCart } from "./hooks/useCart.js"
import { CartProvider } from './context/cart.jsx'


function App() {
  const [products] = useState(initialProducts)
  const {filterProducts, setFilter, filter} = useFilter(products);
 

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
      <Footer/>
    </CartProvider>
  )
}

export default App
