import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../Categorias/styles'

export const HeaderBar2 = styled.header`
  background-color: ${cores.amarelo};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 63px;
  padding-bottom: 65px;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    padding-top: 20px;
    padding-bottom: 20px;
    flex-wrap: wrap;
  }
`

export const Link = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  text-decoration: none;
  cursor: pointer;

  &.link-left {
    margin-right: 300px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-right: 0;
      order: 1;
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
    }
  }

  &.link-right {
    margin-left: 300px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-left: 0;
      order: 3;
      width: 100%;
      text-align: center;
      margin-top: 10px;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    padding: 20px 0;
  }
`

export const Logo = styled.img`
  height: auto;
  padding: 63px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 20px;
    width: 80%;
    max-width: 200px;
  }
`
