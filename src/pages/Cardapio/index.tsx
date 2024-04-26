import imagem2 from '../../assets/images/imagem2.png'
import imagem from '../../assets/images/imagem.png'
import Header2 from '../../components/Header2'
import Banner from '../../components/Banner'
import CardapioList from '../../components/CardapioList'
import Pizza from '../../assets/images/pizza.png'
import { useEffect, useState } from 'react'

export type Comidas = {
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
  const [comidas, setComidas] = useState<Comidas[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setComidas(res))
  }, [])

  return (
    <>
      <Header2 />
      <Banner />
      <CardapioList comidas={comidas} />
    </>
  )
}

export default Home
