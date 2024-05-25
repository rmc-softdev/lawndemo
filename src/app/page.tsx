import Image from 'next/image';
import styles from '@/styles/page.module.css';
import AnimeSearch from '@/components/forms/AnimeSearch';
import AnimesContainer from '@/components/layout/AnimesContainer';

export default function Home() {
  return (
    <main className={styles.main}>
      <AnimeSearch />
      <AnimesContainer />
    </main>
  );
}
