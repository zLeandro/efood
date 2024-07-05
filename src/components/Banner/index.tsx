import React, { useEffect, useState } from 'react'
import { Imagem, Titulo, Subtitulo } from './styles'
import { Container } from '../Product/styles'
import { Restaurant } from '../../pages/Home'

interface Props {
  restauranteId: string
}

const Banner: React.FC<Props> = ({ restauranteId }) => {
  const [restaurante, setRestaurante] = useState<Restaurant | null>(null)

  useEffect(() => {
    if (!restauranteId) return

    fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/${restauranteId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data)
      })
      .catch((error) => {
        console.error('Erro ao obter os detalhes do restaurante:', error)
      })
  }, [restauranteId])

  return (
    <Imagem style={{ backgroundImage: `url(${restaurante?.capa})` }}>
      <Container>
        {restaurante && (
          <>
            <Titulo>{restaurante.tipo}</Titulo>
            <Subtitulo>{restaurante.titulo}</Subtitulo>
          </>
        )}
      </Container>
    </Imagem>
  )
}

export default Banner
