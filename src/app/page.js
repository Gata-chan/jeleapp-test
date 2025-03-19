import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.black_square}></div>
      </main>
      <p>Мой квадрат ❤️</p>
    </div>
  );
}
