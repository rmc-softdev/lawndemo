'use client';
import { queryClient } from '@/client/QueryProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Sort from '../Sort';
import Animes from './Animes';
import { selectSort, sortBy } from '@/store/sort/sortSlice';
import { SortOption, getSortedAnimes } from '@/utils/getSortedAnimes';

const AnimesBrowse = () => {
  const sort = useSelector(selectSort);

  console.log({ sort });

  const { isLoading, error, data } = useQuery({
    queryKey: ['animes', sort],
    queryFn: getSortedAnimes,
  });

  const dispatch = useDispatch();

  const handleSort = (sortOption: SortOption) => {
    dispatch(sortBy(sortOption));
  };

  return (
    <div>
      <Sort handleSort={handleSort} />
      {error && <p>Error: {error.message}</p>}
      <Animes animes={data} isLoading={isLoading} />
    </div>
  );
};

export default AnimesBrowse;
