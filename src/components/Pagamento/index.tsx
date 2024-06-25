import { useFormik } from 'formik'
import {
  PagamentoContainer,
  Input,
  Form,
  Botao,
  Titulo,
  FlexContainer,
  Small
} from './styles'
import * as Yup from 'yup'
import { usePurchase2Mutation } from '../../services/api'

type PagamentoProps = {
  onBack: () => void
  onFinalize: () => void
}

const Pagamento = ({ onBack, onFinalize }: PagamentoProps) => {
  const [purchase2, { isLoading, isError, data }] = usePurchase2Mutation()

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Número inválido')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'Número inválido')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'Mês inválido')
        .max(2, 'Mês inválido')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O campo precisa ter 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase2({
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cvv,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <PagamentoContainer>
      <Titulo>Pagamento - Valor a pagar R$ 190,90</Titulo>
      <Form onSubmit={form.handleSubmit}>
        <label htmlFor="cardName">Nome do cartão</label>
        <Input
          id="cardName"
          type="text"
          name="cardName"
          value={form.values.cardName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <Small>{getErrorMessage('cardName', form.errors.cardName)}</Small>
        <FlexContainer>
          <Form maxWidth="200px">
            <label htmlFor="cardNumber">Número do Cartão</label>
            <Input
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <Small>
              {getErrorMessage('cardNumber', form.errors.cardNumber)}
            </Small>
          </Form>
          <Form maxWidth="90px">
            <label htmlFor="cvv">CVV</label>
            <Input
              id="cvv"
              type="text"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <Small>{getErrorMessage('cvv', form.errors.cvv)}</Small>
          </Form>
        </FlexContainer>

        <FlexContainer>
          <Form maxWidth="155px">
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <Input
              id="expiresMonth"
              type="text"
              name="expiresMonth"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <Small>
              {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
            </Small>
          </Form>
          <Form maxWidth="155px">
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <Input
              id="expiresYear"
              type="text"
              name="expiresYear"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <Small>
              {getErrorMessage('expiresYear', form.errors.expiresYear)}
            </Small>
          </Form>
        </FlexContainer>

        <Botao type="submit">Finalizar Pagamento</Botao>
        <Botao type="button" onClick={onBack}>
          Voltar para a edição de endereço
        </Botao>
      </Form>
    </PagamentoContainer>
  )
}

export default Pagamento
