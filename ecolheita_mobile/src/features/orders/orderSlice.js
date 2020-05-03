import { createSlice } from '@reduxjs/toolkit'
import { orderStatus } from '../../constants'

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    data: [
      {
        status: orderStatus.COLLECTED,
        vendorId: 4,
        quantity: 2,
        price: 10,
      },
      {
        status: orderStatus.COLLECTED,
        vendorId: 0,
        quantity: 1,
        price: 15,
      },
    ],
  },
  reducers: {
    insert: (state, action) =>
      Object.assign(state, { data: [...state.data, action.payload] }),
  },
})

const { reducer, actions } = orderSlice

export default reducer
export const { insert } = actions
