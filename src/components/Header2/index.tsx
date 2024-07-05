import { HeaderBar2, Link } from './styles'
import logo from '../../assets/images/logo.png'
import Vector from '../../assets/images/Vector.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar2 style={{ backgroundImage: `url(${Vector})` }}>
      <Link href="/" className="link-left">
        Restaurantes
      </Link>
      <div className="logo-container">
        <img src={logo} alt="EFOOD" className="logo" />
      </div>
      <Link onClick={openCart} className="link-right">
        {items.length} produto(s) no carrinho
      </Link>
    </HeaderBar2>
  )
}

export default Header
