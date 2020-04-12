import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'Leandro1234',
    email: 'lenadro@negoceki.com',
    phone: '123456789',
    country: 'Brasil',
  },
  reducers: {
    update: (state, action) => Object.assign(state, action.payload),
  },
})

const { reducer, actions } = userSlice

export default reducer
export const { update } = actions
