import { queryClient } from '@/client/QueryProvider';
import Link from 'next/link';
import React from 'react';

const Animes = ({ animes }) => {
  return animes?.data?.map(anime => (
    <Link onClick={() => queryClient.setQueryData(['selectedAnime'], anime)} key={anime.id} href={`/anime/${anime.id}`}>
      <div> {anime.attributes.slug} </div>
    </Link>
  ));
};

export default Animes;
