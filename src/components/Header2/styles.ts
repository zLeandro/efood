import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar2 = styled.header`
  background-color: ${cores.amarelo};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 63px;
  padding-bottom: 65px;
`

export const Link = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  text-decoration: none;

  &.link-left {
    margin-right: 300px;
  }

  &.link-right {
    margin-left: 300px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  height: auto;
  padding: 63px;
`
