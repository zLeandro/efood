import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.amarelo};
  padding: 40px 0;
  margin-top: 120px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33px;
  margin-left: 8px;
`

export const SocialIcon = styled.img`
  margin-right: 10px;
`

export const Texto = styled.h4`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  font-size: 11px;
  font-weight: 400;
  text-align: center;
`
