import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './reducers/carrinho'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
