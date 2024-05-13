import React, { useState } from 'react'
import {
  Card,
  Descricao,
  Titulo,
  Botao,
  Imagem,
  ModalWrapper,
  ModalContent,
  CloseButton,
  ImagemModal,
  TextoModal,
  TituloModal,
  DescricaoModal,
  Preco,
  BotaoAdicionar
} from './styles'

type Props = {
  title: string
  description: string
  image: string
  servings: string
  price: number
}

const Categorias = ({ title, description, image, servings, price }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <Card>
        <Imagem src={image} alt={title} />
        <Titulo>{title}</Titulo>
        <Descricao>{getDescricao(description)}</Descricao>
        <Botao onClick={openModal}>Mais detalhes</Botao>
      </Card>
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <ImagemModal src={image} alt={title} />
            <TextoModal>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <TituloModal>{title}</TituloModal>
              <DescricaoModal>{description}</DescricaoModal>
              <DescricaoModal>Serve: {servings}</DescricaoModal>
              <DescricaoModal>Preço: {price}</DescricaoModal>
              <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
            </TextoModal>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  )
}

export default Categorias
