import { useContext, useId, useState } from 'react'
import './Filters.css'
import { FilterContext } from '../../context/filters'

export function Filter(){
    const {filter,setFilter} =useContext(FilterContext)
    const minPriceFilterId = useId()
    const minCategoryFilterId = useId()
    
    const handleChangeMinPrice =  (event) => {
        setFilter(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeMCategory = (event) => {
        setFilter(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <>
            <section className="filters">
                <div>
                    <label htmlFor='price'>Price</label>
                    <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice}></input>
                    <span>{filter.minPrice}</span>
                </div>
                <div>
                    <label htmlFor='category'>Categoria</label>
                    <select id={minCategoryFilterId} onChange={handleChangeMCategory}>
                        <option value='all'> All </option>
                        <option value='home-decoration'> home-decoration </option>
                        <option value='groceries'> groceries </option>
                        <option value='skincare'> skincare </option>
                        <option value='fragrances'> fragrances </option>
                        <option value='laptops'> laptops </option>
                        <option value='smartphones'> smartphones </option>
                    </select>
                </div>
            </section>
        </>
    )
}