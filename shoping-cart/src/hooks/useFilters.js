import { useState } from "react"

export function useFilter(){
      const [filter, setFilter] = useState({
        category: 'all',
        minPrice: 0,
      })
    
      const filterProducts = (products) => {
        return products.filter(product => {
          return(product.price >= filter.minPrice && (filter.category === 'all' || product.category === filter.category))
        })
      }
    return {filterProducts, setFilter}
}