import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'
import vendorReducer from './features/vendors/vendorSlice'
import userReducer from './features/vendors/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  vendors: vendorReducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
