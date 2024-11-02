import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Главная страница</title>
        <meta name="description" content="Это главная страница Next.js приложения" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Добро пожаловать в <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Card
            title="Документация"
            description="Ссылка на документацию"
            href="https://nextjs.org/docs"
          />
          <Card
            title="Примеры"
            description="Примеры проектов"
            href="https://github.com/vercel/next.js/tree/canary/examples"
          />
          <Card
            title="Блог"
            description="Блог Next.js."
            href="https://nextjs.org/blog"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
