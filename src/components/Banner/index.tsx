import { Imagem, Titulo, Subtitulo } from './styles'

import banner from '../../assets/images/banner.png'
import { Container } from '../Product/styles'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <Container>
      <Titulo>Italiana</Titulo>
      <Subtitulo>La Dolce Vita Trattoria</Subtitulo>
    </Container>
  </Imagem>
)

export default Banner
