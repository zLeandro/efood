import {
  EntregaContainer,
  Input,
  Form,
  Botao,
  Titulo,
  FlexContainer,
  Small
} from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

type EntregaProps = {
  onNext: () => void
  onBack: () => void
}

const Entrega = ({ onNext, onBack }: EntregaProps) => {
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      numberAddress: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'Endereço inválido')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'Cidade inválida')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'CEP inválido')
        .required('O campo é obrigatório'),
      numberAddress: Yup.string()
        .min(1, 'Número inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: parseInt(values.numberAddress, 10),
            complement: values.complement
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      }).then(() => {
        onNext()
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
    <EntregaContainer>
      <Titulo>Entrega</Titulo>
      <Form onSubmit={form.handleSubmit}>
        <label htmlFor="fullName">Quem irá receber</label>
        <Input
          id="fullName"
          type="text"
          name="fullName"
          value={form.values.fullName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <Small>{getErrorMessage('fullName', form.errors.fullName)}</Small>
        <label htmlFor="address">Endereço</label>
        <Input
          id="address"
          type="text"
          name="address"
          value={form.values.address}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <Small>{getErrorMessage('address', form.errors.address)}</Small>
        <label htmlFor="city">Cidade</label>
        <Input
          id="city"
          type="text"
          name="city"
          value={form.values.city}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <Small>{getErrorMessage('city', form.errors.city)}</Small>
        <FlexContainer>
          <div>
            <label htmlFor="cep">CEP</label>
            <Input
              id="cep"
              type="text"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <Small>{getErrorMessage('cep', form.errors.cep)}</Small>
          </div>
          <div>
            <label htmlFor="numberAddress">Número</label>
            <Input
              id="numberAddress"
              type="text"
              name="numberAddress"
              value={form.values.numberAddress}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <Small>
              {getErrorMessage('numberAddress', form.errors.numberAddress)}
            </Small>
          </div>
        </FlexContainer>

        <label htmlFor="complement">Complemento (opcional)</label>
        <Input
          id="complement"
          type="text"
          name="complement"
          value={form.values.complement}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <Small>{getErrorMessage('complement', form.errors.complement)}</Small>
        <Botao type="submit">Continuar com o pagamento</Botao>
        <Botao type="button" onClick={onBack}>
          Voltar para o carrinho
        </Botao>
      </Form>
    </EntregaContainer>
  )
}

export default Entrega
