'use client';

import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchedAnimes from '@/components/layout/SearchedAnimes';
import styles from '@/styles/AnimeSearch.module.css';

const fetchAnimes = async ({ queryKey }) => {
  const [, text] = queryKey; // Destructure to get the text
  if (!text) return { data: [] };
  const response = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=0&filter[text]=${text}`);
  const data = await response.json();
  return data;
};

const AnimeSearch = () => {
  const [text, setText] = useState('');
  const [fill, setFill] = useState('#acacac');
  const [debouncedText, setDebouncedText] = useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['anime-search', text],
    queryFn: fetchAnimes,
    enabled: debouncedText ? !!debouncedText : !!text

  });


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [text]);



  const shouldDisplaySearch = text && data

  return (
    <div className={styles.container}>
      <h1 className={styles.slogan}>Explore Anime</h1>
      <form>
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>
            <svg width="25" height="25" viewBox="0 0 25 25" style={{ fill: fill }}>
              <path d="M20.067 18.933l-4.157-4.157a6 6 0 10-.884.884l4.157 4.157a.624.624 0 10.884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
            </svg>
          </span>
          <input
            className={styles.searchInput}
            onChange={e => setText(e.target.value)}
            value={text}
            placeholder="What are you searching for?"
            onMouseEnter={() => setFill('#333')}
            onMouseLeave={() => setFill('#acacac')}
          />
        </div>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {shouldDisplaySearch && <SearchedAnimes searchedAnime={data.data} />}
    </div>
  );
};

export default AnimeSearch;
