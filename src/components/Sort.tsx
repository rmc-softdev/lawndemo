import { selectSort } from '@/store/sort/sortSlice';
import { SortOption, SortOptions } from '@/utils/getSortedAnimes';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
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
          value={sort === '' ? 'Default' : sort}
          onChange={e => {
            const value = e.target.value === 'Default' ? '' : (e.target.value as SortOption);

            handleSort(value);
          }}
        >
          <MenuItem value={SortOptions.popularity}>Popularity</MenuItem>
          <MenuItem value={SortOptions.date}>Date</MenuItem>
          <MenuItem value={'Default'}>Default</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
