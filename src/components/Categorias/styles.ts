import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  margin-top: 56px;
  border: 8px solid ${cores.vermelho};
  position: relative;
`

export const Botao = styled(Link)`
  background-color: ${cores.amarelo};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 4px 80px;
  margin: 8px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  white-space: nowrap;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: inline-block;
  margin-top: 8px;
  margin: 8px;
  color: ${cores.amarelo};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 8px;
  color: ${cores.amarelo};
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
