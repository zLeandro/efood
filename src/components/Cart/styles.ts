import styled from 'styled-components'
import { cores } from '../../styles'
import fechar from '../../assets/images/lixeira.png'

export const Botao = styled.button`
  background-color: ${cores.amarelo};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  max-width: 100%;
  width: 100%;
  padding: 4px;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const Prices = styled.p`
  font-size: 14px;
  color: ${cores.amarelo};
  font-weight: 700;
`

export const Price2 = styled.p`
  font-size: 14px;
  color: ${cores.amarelo};
  font-weight: 700;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.amarelo};
  padding-top: 8px;
  padding-left: 8px;
  padding-bottom: 12px;
  margin-top: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
  }

  span {
    display: block;
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
