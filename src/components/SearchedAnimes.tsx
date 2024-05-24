'use client';
import React, { useState } from 'react';
import styles from '@/styles/SearchedAnime.module.css';

export const SearchedAnimes = ({ searchedAnime }) => {
  let reducedContent = searchedAnime.slice(0, 5);
  const [viewMore, setViewMore] = useState(false);

  let show = styles.open;

  const renderContent = () => {
    return reducedContent.map(anime => (
      <li key={anime.id}>
        <div className={styles.resultsItems}>
          <div className={styles.resultContent}>
            <img src={anime?.attributes?.posterImage?.tiny} alt="" className={styles.resultContentImg} />
            <span className={styles.resultsName}>{anime?.attributes?.canonicalTitle}</span>
          </div>
          <div className={styles.resultsMedia}>{anime?.attributes?.showType.toUpperCase()}</div>
        </div>
      </li>
    ));
  };

  return (
    <>
      <div className={styles.results}>
        <div className={`${styles.resultsContainer} ${show}`}>
          <div className={styles.resultsTitle}>
            <span> Search Results </span>
          </div>
          <div className={styles.resultsType}>
            <span> Media</span>
            <button onClick={() => setViewMore(!viewMore)} className={styles.resultsTitleButton}>
              {viewMore ? 'Show Less' : ' Load More'}
            </button>
          </div>
          <div className={styles.resultsShowcase}>
            <ul>{renderContent()}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedAnimes;
