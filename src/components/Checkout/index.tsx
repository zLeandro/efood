import React, { useState } from 'react'
import Entrega from '../Entrega'
import Pagamento from '../Pagamento'

const Checkout = () => {
  const [step, setStep] = useState('entrega')

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
