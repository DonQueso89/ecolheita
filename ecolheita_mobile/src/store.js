import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'

const vendorSlice = createSlice({
  name: 'vendors',
  initialState: [0, 1, 2, 3, 4, 5, 7, 8, 9],
  reducers: {
    addVendors: (state, action) => [...state, ...action.payload],
    resetVendors: (state, action) => [],
  },
})

const offerSlice = createSlice({
  name: 'offers',
  initialState: {
    data: [
      'pratpo bom',
      'farofa boa',
      'gostoso pcrmba',
      'muito bom prato',
      'outro prato',
      'maravilha',
      'pratpo bom',
      'farofa boa',
      'gostoso pcrmba',
      'muito bom prato',
      'outro prato',
    ],
    query: '',
  },
  reducers: {
    addOffers: (state, action) =>
      Object.assign(state, { data: [...state.data, ...action.payload] }),
    setOfferQuery: (state, action) =>
      Object.assign(state, { query: action.payload }),
  },
})

const { actions } = offerSlice
export { actions }

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
  offers: offerSlice.reducer,
  vendors: vendorSlice.reducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
