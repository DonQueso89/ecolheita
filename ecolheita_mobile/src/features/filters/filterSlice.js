import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    groceriesFilter: true,
    pastryFilter: true,
    mealsFilter: false,
    todayFilter: false,
  },
  reducers: {
    setGroceriesFilter: (action, state) =>
      Object.assign(state, { groceriesFilter: true }),
    setPastryFilter: (action, state) =>
      Object.assign(state, { pastryFilter: action.payload }),
    setMealsFilter: (action, state) =>
      Object.assign(state, { mealsFilter: action.payload }),
    setTodayFilter: (action, state) => {
      console.log('ACTION DISPATCHED')
      Object.assign(state, { todayFilter: action.payload })
    },
  },
})

const { reducer, actions } = filterSlice

export default reducer
export const {
  setMealsFilter,
  setGroceriesFilter,
  setPastryFilter,
  setTodayFilter,
} = actions
