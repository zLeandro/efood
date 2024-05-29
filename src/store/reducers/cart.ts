import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../pages/Cardapio'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const MenuItem = state.items.find((item) => item.id === action.payload.id)

      if (!MenuItem) {
        state.items.push(action.payload)
      } else {
        alert('O prato ja está no carrinho, vrum vrum')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
