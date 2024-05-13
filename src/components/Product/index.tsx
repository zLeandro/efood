import React from 'react'
import { useNavigate } from 'react-router-dom'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'
import {
  Card,
  Descricao,
  Titulo,
  Classificacao,
  Infos,
  Container,
  ImagemWrapper,
  Imagem,
  Botao
} from './styles'

type Props = {
  id: string
  title: string
  classification: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  id,
  title,
  classification,
  description,
  infos,
  image
}: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/cardapio/${id}`)
  }

  return (
    <Card>
      <ImagemWrapper>
        <Imagem src={image} alt={title} />
      </ImagemWrapper>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Classificacao>
        {classification} <img src={estrela} alt="Estrela" />
      </Classificacao>
      <Descricao>{description}</Descricao>
      <Link to={`/cardapio/${id}`}>
        <Botao>Saiba mais</Botao>
      </Link>
    </Card>
  )
}

const Teste = () => (
  <>
    <Container></Container>
  </>
)

export default Product
