import { createSlice } from '@reduxjs/toolkit'
const Educationdata = {
  courseName: '',
  institutionName: '',
  collageAddress: '',
  startDate: '',
  endDate: '',
}
const initialState = [Educationdata]

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addEducation: (state) => {
      state.push(Educationdata)
    },
    editEducation: (state, action) => {
      const { index, text, id } = action.payload
      state[index][id] = text
    },
    deleteEducation: (state, action) => {
      return state.filter((item, index) => index !== action.payload)
    },
  },
})
export const { editEducation, addEducation, deleteEducation } =
  educationSlice.actions
export default educationSlice.reducer
