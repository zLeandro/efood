import { Restaurant } from '../../pages/Home'
import Product from '../Product'
import { Container } from '../Product/styles'
import { List } from './styles'

export type Props = {
  restaurant: Restaurant[]
}

const ProductsList = ({ restaurant }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.map((restaurant) => (
            <Product
              key={restaurant.id}
              description={restaurant.descricao}
              image={restaurant.capa}
              title={restaurant.titulo}
              classification={restaurant.avaliacao}
              infos={[]}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
