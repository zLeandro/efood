import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cardapio/:id',
    element: <Cardapio />
  }
])

export default function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalCss />
        <RouterProvider router={rotas} />
        <Footer />
        <Cart />
      </Provider>
    </>
  )
}
