import './Footer.css'
import { useCart } from '../../hooks/useCart'

export function Footer () {
//   const { filters } = useFilters()
const {cart} = useCart()

  return (
    <footer className='footer'>
      <h4>Filters applied</h4>
      <h5>{JSON.stringify(cart, null, 2)}</h5>
    </footer>
  )
}