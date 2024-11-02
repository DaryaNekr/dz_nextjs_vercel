import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navLink}>
              Главная
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              О нас
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
