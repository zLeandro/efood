import {
  Botao,
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  Price2,
  PriceContainer
} from './styles'

import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <PriceContainer>
          <Prices>Valor total</Prices>
          <Price2>
            R$ {getTotalPrice()}
            {''}
          </Price2>
        </PriceContainer>
        <Botao title="clique aqui para continuar com a compra" type="button">
          Continuar com a entrega
        </Botao>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
