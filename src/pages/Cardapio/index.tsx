import { useEffect, useState } from 'react'
import Header2 from '../../components/Header2'
import Banner from '../../components/Banner'
import CardapioList from '../../components/CardapioList'

export type Food = {
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
  }[]
}

const Cardapio = () => {
  const [comidas, setComidas] = useState<Food[]>([])

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

export default Cardapio
