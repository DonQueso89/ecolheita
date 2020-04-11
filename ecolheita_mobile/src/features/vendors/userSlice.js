import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { username: 'Leandro1234' },
  reducers: {
    update: (state, action) =>
      Object.assign(state, { username: action.payload.username }),
  },
})

const { reducer, actions } = userSlice

export default reducer
export const { update } = actions
