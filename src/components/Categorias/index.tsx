import React from 'react'
import { Card, Descricao, Titulo, Botao, Imagem } from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const Categorias = ({ title, description, image, onClick }: Props) => (
  <Card onClick={onClick}>
    <Imagem src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao to="#">Adicionar ao carrinho</Botao>
  </Card>
)

export default Categorias
