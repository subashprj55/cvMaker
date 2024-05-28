import { createSlice } from "@reduxjs/toolkit";
const initialState = 1;

const silideCounterSlice = createSlice({
  initialState,
  name: "sliceCounter",
  reducers: {
    changeValue: (state, actions) => {
      return (state = actions.payload);
    },
  },
});
export const { changeValue } = silideCounterSlice.actions;
export default silideCounterSlice.reducer;
