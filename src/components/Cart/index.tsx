import { useState } from 'react'
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

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Entrega from '../Entrega'
import Pagamento from '../Pagamento'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [isEntregaOpen, setIsEntregaOpen] = useState(false)
  const [isPagamentoOpen, setIsPagamentoOpen] = useState(false)

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

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const handleContinuar = () => {
    setIsEntregaOpen(true)
  }

  const handleVoltar = () => {
    setIsEntregaOpen(false)
  }

  const handlePagamento = () => {
    setIsPagamentoOpen(true)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {isPagamentoOpen ? (
          <Pagamento
            onBack={() => setIsPagamentoOpen(false)}
            onFinalize={() => alert('Pedido Finalizado!')}
          />
        ) : isEntregaOpen ? (
          <Entrega onNext={handlePagamento} onBack={handleVoltar} />
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <PriceContainer>
              <Prices>Valor total</Prices>
              <Price2>
                {formataPreco(getTotalPrice())}
                {''}
              </Price2>
            </PriceContainer>
            <Botao
              title="clique aqui para continuar com a compra"
              type="button"
              onClick={handleContinuar}
            >
              Continuar com a entrega
            </Botao>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
