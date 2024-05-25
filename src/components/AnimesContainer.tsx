'use client';
import { queryClient } from '@/client/QueryProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';

export async function getData() {
  try {
    const response = await fetch('https://kitsu.io/api/edge/trending/anime?limit=20');
    const { data } = (await response.json()) as { data: any };
    return { data };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error };
  }
}

export async function getDataPopularity() {
  try {
    const response = await fetch(
      'https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-startDate&sort=-averageRating'
    );

    const { data } = (await response.json()) as { data: any };
    console.log('Getting popular anime:', data);
    return { data };
  } catch (error) {
    console.error('Error fetching popular data:', error);
    return { error };
  }
}

export async function getDataDate() {
  try {
    const response = await fetch('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=5&sort=-averageRating');

    const { data } = (await response.json()) as { data: any };
    console.log('Getting popular anime:', data);
    return { data };
  } catch (error) {
    console.error('Error fetching popular data:', error);
    return { error };
  }
}

const AnimesContainer = () => {
  const [sort, setSort] = useState('');

  // Determine the correct query function based on sort state
  const fetchData = sort === 'popularity' ? getDataPopularity : sort === 'date' ? getDataDate : getData;

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['animes', sort],
    queryFn: fetchData,
  });

  return (
    <div>
      <button
        onClick={() => {
          setSort('popularity');
          refetch();
        }}
      >
        Popularity
      </button>
      <button
        onClick={() => {
          setSort('date');
          refetch();
        }}
      >
        Date
      </button>
      <button
        onClick={() => {
          setSort('');
          refetch();
        }}
      >
        Default
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.data?.map(anime => <div key={anime.id}> {anime.attributes.slug} </div>)}
    </div>
  );
};

export default AnimesContainer;
