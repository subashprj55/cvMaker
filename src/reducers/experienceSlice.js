import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    jobTitle: "",
    companyName: "",
    location: "",
    startDate: "",
    endDate: "",
  },
];
const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience: (state) => {
      return [
        ...state,
        {
          courseName: "",
          institutionName: "",
          collageAddress: "",
          startDate: "",
          endDate: "",
        },
      ];
    },
    deleteExperience: (state, action) => {
      return state.filter((item, index) => index !== action.payload.i);
    },
    editExperience: (state, action) => {
      const { index, text, id } = action.payload;
      const newObj = state[index];
      newObj[id] = text;
      const newArr = state.map((item, i) => {
        if (i === index) return newObj;
        else return item;
      });
      state = newArr;
    },
    getExperience: (state, action) => {
      const data = action.payload;
      return [...data];
    },
  },
});

export const {
  addExperience,
  deleteExperience,
  editExperience,
  getExperience,
} = experienceSlice.actions;
export default experienceSlice.reducer;
