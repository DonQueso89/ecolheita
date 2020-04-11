import { createSlice } from '@reduxjs/toolkit'

const vendorSlice = createSlice({
  name: 'vendors',
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
