import { createSlice } from "@reduxjs/toolkit";
import sample from "./sample.json";
const initialState = {
  filteredTable: sample,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFilteredTable(state, action) {
      state.filteredTable = action.payload;
    },
  },
});

export const { setFilteredTable } = authSlice.actions;

export default authSlice.reducer;
