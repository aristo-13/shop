import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart: (state,action) => {
    const item = state.products.find((item) => item.id === item.payload.id)
       if (item) {
        item.quantity += action.payload.quantity
       } else {
        state.push(action.payload)
       }
    },
    removeItem: (state,item) => {
      state.products = state.products.filter((item) => item.id !== action.payload)
    },
    reset: (state, action) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, reset} = cartSlice.actions

export default cartSlice.reducer