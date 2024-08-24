import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import sample from "./sample.json";
const initialState = {
  filteredTable: sample,
  expandedStepIds: [],
  showWorkFlow: true,
  currentDate: dayjs().format("YYYY-MM-DD"),
  // const [showWorkFlow, setShowWorkFlow] = useState(true)
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFilteredTable(state, action) {
      state.filteredTable = action.payload;
    },
    setExpandedStepIds(state, action) {
      state.expandedStepIds = action.payload;
    },
    setShowWorkFlow(state, action) {
      state.showWorkFlow = action.payload;
    },
    setCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
  },
});

export const {
  setCurrentDate,
  setShowWorkFlow,
  setFilteredTable,
  setExpandedStepIds,
} = authSlice.actions;

export default authSlice.reducer;
