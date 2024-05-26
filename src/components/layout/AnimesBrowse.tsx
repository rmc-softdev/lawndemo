'use client';
import { queryClient } from '@/client/QueryProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { sortBy } from '@/store/sort/sortSlice';
import Sort from '../Sort';
import Animes from './Animes';
import { SortOption, getSortedAnimes } from '@/utils/getSortedAnimes';


const AnimesBrowse = () => {
  const [sort, setSort] = useState<SortOption>('');

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['animes', sort],
    queryFn: getSortedAnimes,
  });

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Sort setSort={setSort} sortBy={sortBy} dispatch={dispatch} refetch={refetch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <Animes animes={data} />
    </div>
  );
};

export default AnimesBrowse;
