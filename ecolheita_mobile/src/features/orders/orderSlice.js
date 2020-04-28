import { createSlice } from '@reduxjs/toolkit'
import { orderStatus } from '../../constants'

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    data: [
      {
        status: orderStatus.COLLECTED,
        offerName: 'farofa XL',
        vendorId: 0,
      },
      {
        status: orderStatus.PAID,
        offerName: 'Spageti louco',
        vendorId: 1,
      },
    ],
  },
})

const { reducer, actions } = orderSlice

export default reducer
export const { update } = actions
