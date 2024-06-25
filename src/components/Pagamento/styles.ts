import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../Categorias/styles'

type FormProps = {
  maxWidth?: string
}

export const Titulo = styled.h2`
  color: ${cores.amarelo};
  font-size: 16px;
  margin-bottom: 16px;
`

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
  margin-top: 8px;
`

export const EntregaContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PagamentoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    color: ${cores.amarelo};
    font-size: 14px;
    margin: 4px 4px;
    font-weight: bold;
  }
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 6px;
  font-size: 14px;
  background-color: ${cores.amarelo};
  border: none;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 6px 4px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Small = styled.small`
  color: white;
`
