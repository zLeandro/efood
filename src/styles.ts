import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  amarelo: '#FFEBD9',
  amareloClaro: '#FFF8F2',
  branco: '#FFF'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.amareloClaro};
    color: ${cores.vermelho};
  }`
