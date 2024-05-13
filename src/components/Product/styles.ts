import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.branco};
  margin-top: 80px;
  border: 1px solid ${cores.vermelho};
  position: relative;
  margin-bottom: 20px;
`

export const ImagemWrapper = styled.div`
  max-width: 472px;
  width: 100%;
`

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  max-height: 217px;
`

export const Botao = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.amareloClaro};
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 4px 6px;
  margin: 8px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  margin-top: 8px;
  margin-bottom: 7px;
  margin: 8px;
`

export const Classificacao = styled.h4`
  font-weight: bold;
  font-size: 18px;
  text-align: right;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
