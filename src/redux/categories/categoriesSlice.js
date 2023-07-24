import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    showStatus: (state) => {
      const displayStatus = 'Under Construction';
      state.push(displayStatus);
    },
  },
});

export const { showStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
