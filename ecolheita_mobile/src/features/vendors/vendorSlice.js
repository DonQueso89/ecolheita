import { createSlice } from '@reduxjs/toolkit'

const vendorSlice = createSlice({
  name: 'vendors',
  initialState: {
    data: [
      {
        _id: 0,
        name: 'O Italiano maluco',
        openFrom: new Date(2020, 1, 1, 12).toTimeString().slice(0, 5),
        openUntil: new Date(2020, 1, 1, 18).toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 5,
      },
      {
        _id: 1,
        name: 'Frango doido',
        openFrom: new Date(2020, 1, 1, 12).toTimeString().slice(0, 5),
        openUntil: new Date(2020, 1, 1, 17).toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 8,
      },
      {
        _id: 2,
        name: 'Pratos e gatos',
        openFrom: new Date(2020, 1, 1, 14).toTimeString().slice(0, 5),
        openUntil: new Date(2020, 1, 1, 18).toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 11,
      },
      {
        _id: 3,
        name: 'Restaurante doido',
        openFrom: new Date(2020, 1, 1, 15).toTimeString().slice(0, 5),
        openUntil: new Date(2020, 1, 1, 21).toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 2,
      },
      {
        _id: 4,
        name: 'Farofa da vovo',
        openFrom: new Date(2020, 1, 1, 2).toTimeString().slice(0, 5),
        openUntil: new Date(2020, 1, 1, 17).toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 3,
      },
      {
        _id: 5,
        name: 'Fritissimo',
        openFrom: new Date(2020, 1, 1, 17).toTimeString().slice(0, 5),
        openUntil: new Date(2020, 1, 1, 23).toTimeString().slice(0, 5),
        distance: 100,
        logo: 'someLogo',
        impression: 'bgPic',
        price: 20,
        numLeft: 3,
      },
      {
        _id: 6,
        name: 'Sabor do campo',
        openFrom: new Date(2020, 1, 1, 12).toTimeString().slice(0, 5),
        openUntil: new Date(2020, 1, 1, 18).toTimeString().slice(0, 5),
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
