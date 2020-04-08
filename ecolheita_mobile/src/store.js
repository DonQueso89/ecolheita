import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'

const vendorSlice = createSlice({
  name: 'vendors',
  initialState: [],
  reducers: {
    addVendors: (state, action) => [...state, ...action.payload],
  },
})

const offerSlice = createSlice({
  name: 'offers',
  initialState: [],
  reducers: {
    addOffers: (state, action) => [...state, ...action.payload],
  },
})

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    updateUser: (state, action) =>
      Object.assign(state, { username: action.payload.username }),
  },
})

const rootReducer = combineReducers({
  user: userSlice.reducer,
  vendors: offerSlice.reducer,
  offers: vendorSlice.reducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
