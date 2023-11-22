import CartReducer from './CartReducer'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {cart:CartReducer},
})

export default store