import { useEffect, useState } from 'react'
import Header2 from '../../components/Header2'
import Banner from '../../components/Banner'
import CardapioList from '../../components/CardapioList'
import { useParams } from 'react-router-dom'

export type Restaurant = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

export type MenuItem = {
  quantidade: number
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Food = {
  restaurante: Restaurant
  cardapio: MenuItem[]
}

const Cardapio = () => {
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
      .catch((error) =>
        console.error('Erro ao obter os dados do restaurante:', error)
      )
  }, [id])

  const [cardapio, setCardapio] = useState<Food | null>(null)

  return (
    <>
      <Header2 />
      {id !== undefined && <Banner restauranteId={id} />}
      {cardapio && <CardapioList comidas={cardapio.cardapio} />}
    </>
  )
}

export default Cardapio
