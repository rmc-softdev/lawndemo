import Image from 'next/image';
import styles from '@/styles/page.module.css';
import AnimeSearch from '@/components/forms/AnimeSearch';
import AnimeBrowse from '@/components/layout/AnimeBrowse';

export default function Home() {
  return (
    <main className={styles.main}>
      <AnimeSearch />
      <AnimeBrowse />
    </main>
  );
}
