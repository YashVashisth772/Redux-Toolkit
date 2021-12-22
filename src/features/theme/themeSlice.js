import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: '',
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeReducer: (state,action) =>{
        state.color = action.payload
    }
  },
});


export const { themeReducer } = themeSlice.actions;
export default themeSlice.reducer;
