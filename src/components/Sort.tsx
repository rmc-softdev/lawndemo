import { SortOption } from '@/utils/getSortedAnimes';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

interface SortProps {
  handleSort: (sortOption: SortOption) => void;
}

const Sort = ({ handleSort }: SortProps) => {
  return (
    <Box sx={{ width: 150, mb: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="sort">
          <MenuItem
            value={'Popularity'}
            onClick={() => {
              handleSort('popularity');
            }}
          >
            Popularity
          </MenuItem>
          <MenuItem
            value={'Date'}
            onClick={() => {
              handleSort('date');
            }}
          >
            Date
          </MenuItem>
          <MenuItem
            value={'Default'}
            onClick={() => {
              handleSort('');
            }}
          >
            Default
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
