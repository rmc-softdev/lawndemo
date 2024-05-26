import { queryClient } from '@/client/QueryProvider';
import { Anime } from '@/types/anime';
import { Skeleton } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Animes.module.css';

interface AnimesProps {
  animes?: {
    data?: Anime[];
  };
  isLoading: boolean;
}

const Animes = ({ animes, isLoading }: AnimesProps) => {
  const dummyData = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className={styles.animesContainer}>
      {isLoading
        ? dummyData.map((_, i) => (
            <div key={i} className={styles.animeCover}>
              {' '}
              <Skeleton width={'100%'} height={'100%'} variant="rectangular" animation="wave" />{' '}
            </div>
          ))
        : animes?.data?.map(anime => (
            <Link
              onClick={() => {
                queryClient.setQueryData(['selectedAnime'], anime);
              }}
              href={`/anime/${anime.id}`}
              key={anime.id}
            >
              <img className={styles.animeCover} alt="Poster image" src={anime.attributes.posterImage.medium} />
            </Link>
          ))}
    </div>
  );
};

export default Animes;
