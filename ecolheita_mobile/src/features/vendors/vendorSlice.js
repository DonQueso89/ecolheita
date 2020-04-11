import { createSlice } from '@reduxjs/toolkit'

const vendorSlice = createSlice({
  name: 'vendors',
  initialState: {
    data: [
      {
        name: 'O Italiano maluco',
        openFrom: new Date().toTimeString().slice(0, 5),
        openUntil: new Date().toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 5,
      },
      {
        name: 'Frango doido',
        openFrom: new Date().toTimeString().slice(0, 5),
        openUntil: new Date().toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 8,
      },
      {
        name: 'Pratos e gatos',
        openFrom: new Date().toTimeString().slice(0, 5),
        openUntil: new Date().toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 11,
      },
      {
        name: 'Restaurante doido',
        openFrom: new Date().toTimeString().slice(0, 5),
        openUntil: new Date().toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 2,
      },
      {
        name: 'Farofa da vovo',
        openFrom: new Date().toTimeString().slice(0, 5),
        openUntil: new Date().toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 3,
      },
      {
        name: 'Fritissimo',
        openFrom: new Date().toTimeString().slice(0, 5),
        openUntil: new Date().toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 3,
      },
      {
        name: 'Sabor do campo',
        openFrom: new Date().toTimeString().slice(0, 5),
        openUntil: new Date().toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 0,
      },
    ],
    query: '',
  },
  reducers: {
    add: (state, action) => [...state, ...action.payload],
    reset: (state, action) => [],
    setQuery: (state, action) =>
      Object.assign(state, { query: action.payload }),
  },
})

const { reducer, actions } = vendorSlice

// Ducks pattern
export default reducer
export const { add, reset, setQuery } = actions
