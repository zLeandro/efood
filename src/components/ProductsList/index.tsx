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
          {restaurant.map((restaurantItem) => (
            <Product
              key={restaurantItem.id}
              id={restaurantItem.id.toString()}
              description={restaurantItem.descricao}
              image={restaurantItem.capa}
              title={restaurantItem.titulo}
              classification={restaurantItem.avaliacao}
              infos={[]}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
