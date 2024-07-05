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
import { close, remove, clear } from '../../store/reducers/cart'
import Entrega from '../Entrega'
import Pagamento from '../Pagamento'
import { Mensagem } from '../Pagamento/styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [isEntregaOpen, setIsEntregaOpen] = useState(false)
  const [isPagamentoOpen, setIsPagamentoOpen] = useState(false)
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false)

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
    if (items.length === 0) {
      alert('O carrinho está vazio. Adicione itens antes de continuar.')
      return
    }
    setIsEntregaOpen(true)
  }

  const handleVoltar = () => {
    setIsEntregaOpen(false)
  }

  const handlePagamento = () => {
    if (items.length === 0) {
      alert('O carrinho está vazio. Adicione itens antes de continuar.')
      return
    }
    setIsPagamentoOpen(true)
  }

  const handleFinalize = () => {
    dispatch(clear())
    setIsPagamentoOpen(false)
    setIsEntregaOpen(false)
    setIsPaymentCompleted(true)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {isPaymentCompleted ? (
          <Mensagem>
            <h3>Pedido realizado!</h3>
            <Botao onClick={() => setIsPaymentCompleted(false)}>Fechar</Botao>
          </Mensagem>
        ) : isPagamentoOpen ? (
          <Pagamento
            onBack={() => setIsPagamentoOpen(false)}
            onFinalize={handleFinalize}
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
