import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'
import vendorReducer from './features/vendors/vendorSlice'
import userReducer from './features/user/userSlice'
import orderReducer from './features/orders/orderSlice'

const rootReducer = combineReducers({
  user: userReducer,
  vendors: vendorReducer,
  orders: orderReducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
