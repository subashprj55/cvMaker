import { configureStore } from "@reduxjs/toolkit";
import basicInfoReducer from "../reducers/basicInfoSlice";
import educationReducer from "../reducers/educationSlice";
import experienceReducer from "../reducers/experienceSlice";
import PSRReducer from "../reducers/PSLSlice";
import SlideCounterReducer from "../reducers/SlideCounterSlice";

export const store = configureStore({
  reducer: {
    basicInfo: basicInfoReducer,
    educationData: educationReducer,
    experienceData: experienceReducer,
    PSRData: PSRReducer,
    SliceCounterData: SlideCounterReducer,
  },
});
