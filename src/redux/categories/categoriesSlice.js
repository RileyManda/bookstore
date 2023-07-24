import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    showStatus: () => {
      const displayStatus = 'Under Construction';
      return [displayStatus];
    },
  },
});

export const { showStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
