import React from 'react'
import {
  FooterContainer,
  LogoContainer,
  SocialIcons,
  SocialIcon,
  Texto
} from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <LogoContainer>
      <img src={logo} alt="EFOOD" className="logo" />
    </LogoContainer>
    <SocialIcons>
      <SocialIcon src={instagram} alt="instagram" className="instagram" />
      <SocialIcon src={facebook} alt="facebook" className="facebook" />
      <SocialIcon src={twitter} alt="twitter" className="twitter" />
    </SocialIcons>
    <Texto>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.{' '}
    </Texto>
  </FooterContainer>
)

export default Footer
