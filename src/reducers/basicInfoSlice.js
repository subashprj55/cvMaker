import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firstName: "",
  professionalTitle: "",
  website: "",
  address: "",
  city: "",
  email: "",
  phone: "",
  summary: "",
  id: "",
};

export const basicInfoSlice = createSlice({
  name: "basicInfo",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      const { id, value } = action.payload;
      state[id] = value;
    },
    setBasicInfo: (state, action) => {
      const data = action.payload;
      const {
        firstName,
        professionalTitle,
        website,
        address,
        city,
        email,
        phone,
        summary,
        _id,
      } = data[0];
      state.firstName = firstName;
      state.professionalTitle = professionalTitle;
      state.website = website;
      state.address = address;
      state.city = city;
      state.email = email;
      state.phone = phone;
      state.summary = summary;
      state.id = _id;
    },
  },
});

export const { changeValue, setBasicInfo } = basicInfoSlice.actions;
export default basicInfoSlice.reducer;
