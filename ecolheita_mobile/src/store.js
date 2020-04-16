import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'
import vendorReducer from './features/vendors/vendorSlice'
import userReducer from './features/user/userSlice'
import orderReducer from './features/orders/orderSlice'
import filterReducer from './features/filters/filterSlice'

const rootReducer = combineReducers({
  user: userReducer,
  vendors: vendorReducer,
  orders: orderReducer,
  filters: filterReducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
