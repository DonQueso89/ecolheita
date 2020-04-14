import { createSlice } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'

enableMapSet()

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'Leandro1234',
    email: 'lenadro@negoceki.com',
    phone: '123456789',
    country: 'Brasil',
    favorites: [1, 4],
  },
  reducers: {
    update: (state, action) => Object.assign(state, action.payload),
    removeFavorite: (state, action) => {
      Object.assign(state, {
        favorites: state.favorites.filter((x) => x != action.payload),
      })
    },
    addFavorite: (state, action) =>
      Object.assign(state, {
        favorites: [...state.favorites, action.payload],
      }),
  },
})

const { reducer, actions } = userSlice

export default reducer
export const { update, addFavorite, removeFavorite } = actions
