import Restaurant from '../../models/Restaurant'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurant: Restaurant[]
}

const ProductsList = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <Product
            key={restaurant.id}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            title={restaurant.title}
            classification={restaurant.classification}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
