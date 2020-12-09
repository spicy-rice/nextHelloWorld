import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>
        <br></br>
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/give-me-a-break-funny-coding-pun-dogboo.jpg"></img>
      </main>

      <footer className={styles.footer}>
        <h6>By Shanice & Becky</h6>
      </footer>
    </div>
  );
}
