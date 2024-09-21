import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialStateFav: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: initialStateFav,
  reducers: {
    setFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens = [...state.itens, produto]
        // state.itens.push(produto)
      }
    }
  }
})

export const { setFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
