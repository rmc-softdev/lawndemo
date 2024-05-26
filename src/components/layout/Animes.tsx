import { queryClient } from '@/client/QueryProvider';
import { Anime } from '@/types/anime';
import Image from 'next/image';
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

      <img alt='Poster image'
        src={anime.attributes.posterImage.tiny} />

    </Link>
  ));
};

export default Animes;
