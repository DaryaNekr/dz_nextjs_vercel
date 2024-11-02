import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Контакты</title>
        <meta name="description" content="Свяжитесь с нами" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.description}>
          Проект по заданию dz_nextjs_vercel
        </p>
      </main>

      <Footer />
    </div>
  );
}
