import { createSlice } from '@reduxjs/toolkit'
import { dietPrefs } from '../../constants'


const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    groceriesFilter: false,
    pastryFilter: false,
    mealsFilter: false,
    todayFilter: false,
    diet: dietPrefs.ALL,
    startTime: 0,
    endTime: 96
  },
  reducers: {
    setGroceriesFilter: (state, action) =>
      Object.assign(state, { groceriesFilter: action.payload }),
    setPastryFilter: (state, action) =>
      Object.assign(state, { pastryFilter: action.payload }),
    setMealsFilter: (state, action) =>
      Object.assign(state, { mealsFilter: action.payload }),
    setTodayFilter: (state, action) => 
      Object.assign(state, { todayFilter: action.payload }),
    setDiet: (state, action) => 
      Object.assign(state, { diet: action.payload }),
    setStartTime: (state, action) => 
      Object.assign(state, { startTime: action.payload }),
    setEndTime: (state, action) => 
      Object.assign(state, { endTime: action.payload })
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
  setDiet,
  setStartTime,
  setEndTime,
} = actions
