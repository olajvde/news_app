import Head from "next/head";
import {Toolbar} from "../components/toolbar";
import styles from "../styles/Home.module.css";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Olajvde's News App</h1>
        <h3 className={styles.desc}>
          Come back for the latest news articles about Nigeria and
          Cryptocurrency rates
        </h3>
        <br />
        <div
          className={styles.link}
          onClick={() => {
            router.push("/feed/1");
          }}
        >
          <h3>Go to Feeds </h3>
        </div>
      </div>
    </div>
  );
}
