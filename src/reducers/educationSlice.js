import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    courseName: "",
    institutionName: "",
    collageAddress: "",
    startDate: "",
    endDate: "",
  },
];

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    editEducation: (state, action) => {
      const { index, text, id } = action.payload;
      const newObj = state[index];
      newObj[id] = text;
      const newArr = state.map((item, i) => {
        if (i === index) return newObj;
        else return item;
      });
      state = newArr;
    },
    getEducation: (state, action) => {
      const data = action.payload;
      return [...data];
    },
  },
});
export const { editEducation, getEducation } = educationSlice.actions;
export default educationSlice.reducer;
