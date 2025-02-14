import { Filter } from "../Filters/Filters"

export function Header({changeFilters}) {
    return(
        <>
            <h1>{`Let's buy`} :cart</h1>
            <Filter onChange={changeFilters}/>
        </>
    )
}