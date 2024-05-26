import Image from 'next/image';
import styles from '@/styles/page.module.css';
import AnimeSearch from '@/components/forms/AnimeSearch';
import AnimesBrowse from '@/components/layout/AnimesBrowse';

export default function Home() {
  return (
    <main className={styles.main}>
      <AnimeSearch />
      <AnimesBrowse />
    </main>
  );
}
