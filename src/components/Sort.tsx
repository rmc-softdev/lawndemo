import { SortOption } from '@/utils/getSortedAnimes';
import React from 'react';


interface SortProps {
  handleSort: (sortOption: SortOption) => void
}

const Sort = ({ handleSort }: SortProps) => {
  return (
    <div>
      <button
        onClick={() => {
          handleSort('popularity')
        }}
      >
        Popularity
      </button>
      <button
        onClick={() => {
          handleSort('date')
        }}
      >
        Date
      </button>
      <button
        onClick={() => {
          handleSort('')
        }}
      >
        Default
      </button>
    </div>
  );
};

export default Sort;
