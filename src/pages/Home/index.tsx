import ProductsList from '../../components/ProductsList'
import imagem2 from '../../assets/images/imagem2.png'
import imagem from '../../assets/images/imagem.png'
import Restaurant from '../../models/Restaurant'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: imagem2,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    classification: '4,9'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    classification: '4,9'
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem,
    infos: ['Italiana'],
    title: 'Hioki Sushi',
    classification: '4,9'
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem,
    infos: ['Italiana'],
    title: 'Hioki Sushi',
    classification: '4,9'
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem,
    infos: ['Italiana'],
    title: 'Hioki Sushi',
    classification: '4,9'
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem,
    infos: ['Italiana'],
    title: 'Hioki Sushi',
    classification: '4,9'
  }
]

const Home = () => (
  <>
    <ProductsList restaurant={restaurantes} />
  </>
)

export default Home
