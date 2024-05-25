import styles from '@/styles/SearchedAnime.module.css';

const SearchedAnimes = ({ searchedAnime }) => {

  const renderContent = () => {
    const reducedContent = searchedAnime.slice(0, 5);
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
        <div className={styles.resultsContainer}>
          <div className={styles.resultsTitle}>
            <span> Search Results </span>
          </div>
          <div className={styles.resultsType}>
            <span> Media</span>
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
