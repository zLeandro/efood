import { Food } from '../../pages/Cardapio'
import Categorias from '../Categorias'
import { Container } from '../Product/styles'
import { List } from './styles'

export type Props = {
  comidas: Food[]
}

const CardapioList = ({ comidas }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {comidas.map((restaurante) =>
            restaurante.cardapio.map((item) => (
              <Categorias
                key={item.id}
                description={item.descricao}
                image={item.foto}
                title={item.nome}
                onClick={function (): void {
                  throw new Error('Function not implemented.')
                }}
              />
            ))
          )}
        </List>
      </div>
    </Container>
  )
}

export default CardapioList
