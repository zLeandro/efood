import { Card, Descricao, Titulo, Botao, Container } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Categorias = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao to="#">Adicionar ao carrinho</Botao>
  </Card>
)

const Teste = () => (
  <>
    <Container></Container>
  </>
)

export default Categorias
