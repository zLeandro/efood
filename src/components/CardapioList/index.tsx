import Comidas from '../../models/Comidas'
import Categorias from '../Categorias'
import { Container } from '../Product/styles'
import { List } from './styles'

export type Props = {
  comidas: Comidas[]
}

const CardapioList = ({ comidas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {comidas.map((comidas) => (
          <Categorias
            key={comidas.id}
            description={comidas.description}
            image={comidas.image}
            title={comidas.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default CardapioList
