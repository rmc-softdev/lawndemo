import { queryClient } from '@/client/QueryProvider';
import { Anime } from '@/types/anime';
import Link from 'next/link';
import React from 'react';

interface AnimesProps {
  animes?: {
    data?: Anime[];
  };
}
const Animes = ({ animes }: AnimesProps) => {
  return animes?.data?.map(anime => (
    <Link
      onClick={() => {
        queryClient.setQueryData(['selectedAnime'], anime);
      }}
      key={anime.id}
      href={`/anime/${anime.id}`}
    >
      <div> {anime.attributes.slug} </div>
    </Link>
  ));
};

export default Animes;
