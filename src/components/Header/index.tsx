import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.png'
import Vector from '../../assets/images/Vector.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${Vector})` }}>
    <div className="logo-container">
      <img src={logo} alt="EFOOD" className="logo" />
    </div>
    <p>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </p>
  </HeaderBar>
)

export default Header
