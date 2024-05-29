import React from 'react'
import Categorias from '../Categorias'
import { Container } from '../Product/styles'
import { List } from './styles'
import { MenuItem } from '../../pages/Cardapio'

type Props = {
  comidas?: MenuItem[]
}

const CardapioList = ({ comidas }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {comidas &&
            comidas.length > 0 &&
            comidas.map((item) => <Categorias key={item.id} item={item} />)}
        </List>
      </div>
    </Container>
  )
}

export default CardapioList
