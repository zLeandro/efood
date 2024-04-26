import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'

import {
  Card,
  Descricao,
  Titulo,
  Classificacao,
  Infos,
  Botao,
  Container,
  ImagemWrapper,
  Imagem
} from './styles'

type Props = {
  title: string
  classification: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  classification,
  description,
  infos,
  image
}: Props) => (
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
    <Botao to="/cardapio">Saiba mais</Botao>
  </Card>
)

const Teste = () => (
  <>
    <Container></Container>
  </>
)

export default Product
