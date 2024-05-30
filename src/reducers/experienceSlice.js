import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    jobTitle: '',
    companyName: '',
    location: '',
    startDate: '',
    endDate: '',
  },
]
const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    addExperience: (state) => {
      return [
        ...state,
        {
          jobTitle: '',
          companyName: '',
          location: '',
          startDate: '',
          endDate: '',
        },
      ]
    },
    editExperience: (state, action) => {
      const { index, text, id } = action.payload
      state[index][id] = text
    },
    deleteExperience: (state, action) => {
      return state.filter((item, index) => index !== action.payload)
    },
  },
})

export const { addExperience, deleteExperience, editExperience } =
  experienceSlice.actions
export default experienceSlice.reducer
