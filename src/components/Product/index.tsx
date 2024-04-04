import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'

import { Card, Descricao, Titulo, Classificacao, Infos, Botao } from './styles'

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
    <img src={image} alt={title} />
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

export default Product
