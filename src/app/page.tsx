import Image from 'next/image';
import styles from './page.module.css';
import { AnimeSearch } from '@/components/AnimeSearch';

export default function Home() {
  return (
    <main className={styles.main}>
      <AnimeSearch />
    </main>
  );
}
