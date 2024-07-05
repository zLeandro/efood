import styled from 'styled-components'
import { breakpoints } from '../Categorias/styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    grid-template-columns: 1fr;
  }
`
