import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { SortOption } from '@/utils/getSortedAnimes';

interface SortState {
  value: SortOption;
}

const initialState: SortState = {
  value: '',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sortBy: (state, action: PayloadAction<SortOption>) => {
      state.value = action.payload;
    },
  },
});

export const { sortBy } = sortSlice.actions;

export const selectSort = (state: RootState) => state.sort.value;

export default sortSlice.reducer;
