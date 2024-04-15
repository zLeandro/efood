import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.amarelo};
  padding-top: 64px;
  padding-bottom: 40px;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 138px;
  }

  .logo {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 36px;
    text-align: center;
    font-weight: bold;
  }
`
