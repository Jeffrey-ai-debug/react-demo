// 从index拆分personSlice
import { createSlice } from '@reduxjs/toolkit'

const personSlice = createSlice({
  name: 'person',
  initialState: {
    name: '陈浩南',
    address: '香港铜锣湾',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload
    },
    setAddress(state, action) {
      state.address = action.payload
    },
  },
})

export const { setName, setAddress } = personSlice.actions
export const { reducer: personReducer } = personSlice
