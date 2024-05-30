import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  firstName: '',
  professionalTitle: '',
  website: '',
  address: '',
  city: '',
  email: '',
  phone: '',
  summary: '',
  id: '',
}

export const basicInfoSlice = createSlice({
  name: 'basicInfo',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      const { id, value } = action.payload
      state[id] = value
    },
  },
})

export const { changeValue, setBasicInfo } = basicInfoSlice.actions
export default basicInfoSlice.reducer
