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
  BotaoAdicionar
} from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { MenuItem } from '../../pages/Cardapio'

type Props = {
  item: MenuItem
}

const Categorias = ({ item }: Props) => {
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

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    closeModal()
    dispatch(open())
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <Card>
        <Imagem src={item.foto} alt={item.nome} />
        <Titulo>{item.nome}</Titulo>
        <Descricao>{getDescricao(item.descricao)}</Descricao>
        <Botao onClick={openModal}>Mais detalhes</Botao>
      </Card>
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <ImagemModal src={item.foto} alt={item.nome} />
            <TextoModal>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <TituloModal>{item.nome}</TituloModal>
              <DescricaoModal>{item.descricao}</DescricaoModal>
              <DescricaoModal>Serve: {item.porcao}</DescricaoModal>
              <BotaoAdicionar onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(item.preco)}
              </BotaoAdicionar>
            </TextoModal>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  )
}

export default Categorias
