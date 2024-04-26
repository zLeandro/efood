import { Comidas } from '../../pages/Cardapio'
import Categorias from '../Categorias'
import { Container } from '../Product/styles'
import { List } from './styles'

export type Props = {
  comidas: Comidas[]
}

const CardapioList = ({ comidas }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {comidas.map((comidas) => (
            <Categorias
              key={comidas.id}
              description={comidas.cardapio.descricao}
              image={comidas.cardapio.foto}
              title={comidas.cardapio.nome}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default CardapioList
