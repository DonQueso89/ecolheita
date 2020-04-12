import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    data: [
      {
        status: 'collected',
        offerName: 'farofa XL',
        vendorName: 'farofa da vovo',
      },
      {
        status: 'pending',
        offerName: 'Spageti louco',
        vendorName: 'O Italiano maluco',
      },
    ],
  },
})

const { reducer, actions } = orderSlice

export default reducer
export const { update } = actions
