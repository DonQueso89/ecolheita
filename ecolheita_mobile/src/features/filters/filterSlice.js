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
    toggleGroceriesFilter: (action, state) =>
      Object.assign(state, { groceriesFilter: !state.groceriesFilter }),
    togglePastryFilter: (action, state) =>
      Object.assign(state, { pastryFilter: !state.pastryFilter }),
    toggleMealsFilter: (action, state) =>
      Object.assign(state, { mealsFilter: !state.mealsFilter }),
    toggleTodayFilter: (action, state) =>
      Object.assign(state, { todayFilter: !state.todayFilter }),
  },
})

const { reducer, actions } = filterSlice

export default reducer
export const {
  toggleMealsFilter,
  toggleGroceriesFilter,
  togglePastryFilter,
  toggleTodayFilter,
} = actions
