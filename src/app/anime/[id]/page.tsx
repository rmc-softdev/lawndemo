'use client';

import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import styles from '@/styles/SingleAnimePage.module.css';

interface SortQuery {
  queryKey: ['anime-detail', string];
}

const fetchAnimeById = async ({ queryKey }: SortQuery) => {
  const [, id] = queryKey;
  const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

interface SingleAnimePageProps {
  params: {
    id: string;
  };
}

const SingleAnimePage = ({ params: { id } }: SingleAnimePageProps) => {
  const queryClient = useQueryClient();
  const cachedAnime = queryClient.getQueryData(['selectedAnime']);

  const { data, isLoading, error } = useQuery({
    queryKey: ['anime-detail', id],
    queryFn: fetchAnimeById,
    initialData: cachedAnime ? { data: cachedAnime } : undefined,
    enabled: !!id,
  });

  if (isLoading) return <p style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>Error: {error.message}</p>;

  const anime = data.data;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{anime.attributes.titles.en || anime.attributes.titles.en_jp}</h1>
      <img
        src={anime.attributes.posterImage.original}
        alt={anime.attributes.titles.en || anime.attributes.titles.en_jp}
        className={styles.image}
      />
      <p className={styles.synopsis}>{anime.attributes.synopsis}</p>
      <div className={styles.details}>
        <div className={styles.detail}>
          <strong>Type:</strong> {anime.attributes.showType}
        </div>
        <div className={styles.detail}>
          <strong>Status:</strong> {anime.attributes.status}
        </div>
        <div className={styles.detail}>
          <strong>Episodes:</strong> {anime.attributes.episodeCount}
        </div>
        <div className={styles.detail}>
          <strong>Average Rating:</strong> {anime.attributes.averageRating}
        </div>
        <div className={styles.detail}>
          <strong>Start Date:</strong> {anime.attributes.startDate}
        </div>
        <div className={styles.detail}>
          <strong>End Date:</strong> {anime.attributes.endDate || 'Ongoing'}
        </div>
      </div>
    </div>
  );
};

export default SingleAnimePage;
