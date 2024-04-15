import { HeaderBar2, Link } from './styles'
import logo from '../../assets/images/logo.png'
import Vector from '../../assets/images/Vector.png'

const Header = () => (
  <HeaderBar2 style={{ backgroundImage: `url(${Vector})` }}>
    <Link href="/" className="link-left">
      Restaurantes
    </Link>
    <div className="logo-container">
      <img src={logo} alt="EFOOD" className="logo" />
    </div>
    <Link href="#" className="link-right">
      0 produto(s) no carrinho
    </Link>
  </HeaderBar2>
)

export default Header
