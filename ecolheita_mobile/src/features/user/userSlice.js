import { createSlice } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'

enableMapSet()

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'Leandro1234',
    email: 'lenadro@negoceki.com',
    phone: '123456789',
    region: 'Parana',
    favorites: [1, 4],
    allowPushNotifications: false,
    latitude: -24.799791,
    longitude: -50.0014762,
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
