'use client';

import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const fetchAnimeById = async ({ queryKey }) => {
    const [, id] = queryKey;
    const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

const SingleAnimePage = ({ params: { id } }) => {
    const queryClient = useQueryClient();
    const cachedAnime = queryClient.getQueryData(['selectedAnime']);

    const { data, isLoading, error } = useQuery({
        queryKey: ['anime-detail', id],
        queryFn: fetchAnimeById,
        initialData: cachedAnime ? { data: cachedAnime } : undefined,
        enabled: !!id,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const anime = data.data;

    return (
        <div>
            <h1>{anime.attributes.titles.en || anime.attributes.titles.en_jp}</h1>
            <p>{anime.attributes.synopsis}</p>
            <img src={anime.attributes.posterImage.original} alt={anime.attributes.titles.en || anime.attributes.titles.en_jp} />
            {/* Add more details as needed */}
        </div>
    );
};

export default SingleAnimePage;
