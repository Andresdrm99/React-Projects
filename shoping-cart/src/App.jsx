import { Header } from "./components/Header/Header.jsx"
import { Products  } from "./components/Products/Products.jsx"
import { useFilter } from "./hooks/useFilters.js"
import {products as initialProducts} from './mocks/data.json'
import { useState } from "react"


function App() {
  const [products] = useState(initialProducts)
  const {filterProducts, setFilter} = useFilter(products);

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilter}/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
