import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>О нас</title>
        <meta name="description" content="Страница о проекте на Next.js" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>О нас</h1>
        <p className={styles.description}>
          Проект по заданию dz_nextjs_vercel
        </p>
      </main>

      <Footer />
    </div>
  );
}
