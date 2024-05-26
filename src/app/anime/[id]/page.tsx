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
      <h1 data-testId="anime-title" className={styles.title}>
        {anime.attributes.titles.en || anime.attributes.titles.en_jp}
      </h1>
      <img
        data-testId="anime-img"
        src={anime.attributes.posterImage.original}
        alt={anime.attributes.titles.en || anime.attributes.titles.en_jp}
        className={styles.image}
      />


      <div className={styles.section}>
        <p className={styles.synopsis}>{anime.attributes.synopsis}</p>

        <div className={styles.details}>
          <h4 className={styles.slogan}>Anime Details</h4>
          <div className={styles.detail}>
            <li>
              <strong className={styles.strong}>English</strong>
              <span>{anime.attributes.titles.en_jp}</span>
            </li>
            <li>
              <strong className={styles.strong}>Japanese</strong>
              <span>{anime.attributes.titles.ja_jp}</span>
            </li>
            <li>
              <strong className={styles.strong}>Japanese(Romaji)</strong>
              <span>{anime.attributes.abbreviatedTitles}</span>
            </li>
            <li>
              <strong className={styles.strong}>Age Rating</strong>
              <span>{anime.attributes.ageRating}</span>
            </li>
            <li>
              <strong className={styles.strong}>Episodes released</strong>
              <span>{anime.attributes.episodeLength}</span>
            </li>
            <li>
              <strong className={styles.strong}>Start date</strong>
              <span>{anime.attributes.start_date}</span>
            </li>
            <li>
              <strong className={styles.strong}>Status</strong>
              <span>{anime.attributes.status}</span>
            </li>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SingleAnimePage;
