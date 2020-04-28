import { createSlice } from '@reduxjs/toolkit'
import { foodCategories } from '../../constants'


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
        description: "O italiano maluco vende comidas Italianas e lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: foodCategories.MEALS
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
        description: "O frango doido vende comidas com frango e lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: foodCategories.MEALS
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
        description: "O pratos e gatos vende comidas com carne de gato e lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: foodCategories.MEALS
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
        description: "O restaurante vende comidas doidamente bem e lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: foodCategories.MEALS
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
        description: "O Farofa da vovo vende farofa e lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: foodCategories.MEALS

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
        description: "O Fritissimo vende coisas fritas e lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: foodCategories.MEALS
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
        description: "O Sabor do campo vende comida do campo e lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: foodCategories.GROCERIES
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
