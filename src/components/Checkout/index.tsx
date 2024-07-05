import React, { useState } from 'react'
import Entrega from '../Entrega'
import Pagamento from '../Pagamento'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Checkout = () => {
  const [step, setStep] = useState('entrega')
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <div>
      {step === 'entrega' && (
        <Entrega
          onNext={() => setStep('pagamento')}
          onBack={() => setStep('carrinho')}
        />
      )}
      {step === 'pagamento' && (
        <Pagamento
          onBack={() => setStep('entrega')}
          onFinalize={() => alert('Pedido Finalizado!')}
        />
      )}
    </div>
  )
}

export default Checkout
