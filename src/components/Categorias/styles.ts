import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  margin-top: 56px;
  border: 8px solid ${cores.vermelho};
  position: relative;
`

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  max-height: 167px;
`

export const Botao = styled.button`
  background-color: ${cores.amarelo};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 4px 16px;
  margin: 8px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: inline-block;
  margin-top: 8px;
  margin: 8px;
  color: ${cores.amarelo};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 8px;
  color: ${cores.amarelo};
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  background-color: ${cores.vermelho};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 1024px;
  width: 90%;
`

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: ${cores.branco};
`

export const ImagemModal = styled.img`
  width: auto;
  height: auto;
  max-width: 280px;
  max-height: 280px;
`

export const TextoModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`

export const TituloModal = styled.h2`
  font-size: 18px;
  font-weight: 900px;
  margin-bottom: 10px;
  color: ${cores.branco};
`

export const DescricaoModal = styled.p`
  margin-top: 16px;
  color: ${cores.branco};
  font-size: 14px;
  font-weight: 400px;
`

export const Preco = styled.span`
  font-size: 16px;
  color: ${cores.amarelo};
  margin-top: 8px;
`

export const BotaoAdicionar = styled.button`
  background-color: ${cores.amarelo};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 4px 16px;
  margin-top: 8px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`
