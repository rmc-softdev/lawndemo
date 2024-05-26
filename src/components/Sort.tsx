import { selectSort } from '@/store/sort/sortSlice';
import { SortOption } from '@/utils/getSortedAnimes';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

interface SortProps {
  handleSort: (sortOption: SortOption) => void;
}

const Sort = ({ handleSort }: SortProps) => {
  const sort = useSelector(selectSort);

  return (
    <Box sx={{ width: 150, mb: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="sort"
          value={sort}
          onChange={e => {
            const value = e.target.value as SortOption;

            handleSort(value);
          }}
        >
          <MenuItem value={'popularity' as const}>Popularity</MenuItem>
          <MenuItem
            value={'date' as const}
            // onClick={() => {
            //   handleSort('date');
            // }}
          >
            Date
          </MenuItem>
          <MenuItem
            value={'' as const}
            // onClick={() => {
            //   handleSort('');
            // }}
          >
            Default
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
