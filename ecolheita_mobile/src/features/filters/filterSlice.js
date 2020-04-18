import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    groceriesFilter: false,
    pastryFilter: false,
    mealsFilter: false,
    todayFilter: false,
  },
  reducers: {
    setGroceriesFilter: (state, action) =>
      Object.assign(state, { groceriesFilter: action.payload }),
    setPastryFilter: (state, action) =>
      Object.assign(state, { pastryFilter: action.payload }),
    setMealsFilter: (state, action) =>
      Object.assign(state, { mealsFilter: action.payload }),
    setTodayFilter: (state, action) => 
      Object.assign(state, { todayFilter: action.payload })
    ,
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
