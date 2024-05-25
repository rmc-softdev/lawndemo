import React from 'react';

interface SortProps {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const Sort = ({ setSort, dispatch, sortBy, refetch }: SortProps) => {
  return (
    <div>
      <button
        onClick={() => {
          setSort('popularity');
          dispatch(sortBy('popularity'));
          refetch();
        }}
      >
        Popularity
      </button>
      <button
        onClick={() => {
          setSort('date');
          dispatch(sortBy('date'));
          refetch();
        }}
      >
        Date
      </button>
      <button
        onClick={() => {
          setSort('');
          dispatch(sortBy(''));
          refetch();
        }}
      >
        Default
      </button>
    </div>
  );
};

export default Sort;
