import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import imagem2 from '../../assets/images/imagem2.png'
import imagem from '../../assets/images/imagem.png'
import Header from '../../components/Header'

export type Restaurant = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <ProductsList restaurant={restaurantes} />
    </>
  )
}

export default Home
