import React, { useEffect, useState } from 'react'
import { Imagem, Titulo, Subtitulo } from './styles'
import { Container } from '../Product/styles'
import { Food } from '../../pages/Cardapio'

const Banner = () => {
  const [comida, setComida] = useState<Food | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setComida(data[0])
        }
      })
  }, [])

  return (
    <Imagem style={{ backgroundImage: `url(${comida?.capa})` }}>
      <Container>
        {comida && (
          <>
            <Titulo>{comida.tipo}</Titulo>
            <Subtitulo>{comida.titulo}</Subtitulo>
          </>
        )}
      </Container>
    </Imagem>
  )
}

export default Banner
