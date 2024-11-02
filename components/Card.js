import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({ title, description, href }) {
  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Link href={href} className={styles.card}>
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
      </Link>
    );
  }

  return (
    <a href={href} className={styles.card} target="_blank" rel="noopener noreferrer">
      <h3>{title} &rarr;</h3>
      <p>{description}</p>
    </a>
  );
}
