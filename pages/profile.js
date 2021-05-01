import {Toolbar} from "../components/toolbar";
import {useRouter} from "next/router";
import Image from "next/image";
import styles from "../styles/EOM.module.css";

export const EOM = () => {
  const router = useRouter();
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1 className={styles.color}>My Profile</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>Olajvde</h3>
          <h6>Backend Dev</h6>
          <Image src="/img.jpg" width={200} height={200} />

          <p>Hey, lol</p>

          <div
            className={styles.color}
            onClick={() => {
              router.push("https://olajvde.netlify.app");
            }}
          >
            <h3>Check out my Portfolio </h3>
          </div>
          <br />
          <div
            className={styles.color}
            onClick={() => {
              router.push("https://github.com/olajvde");
            }}
          >
            <h3>Check out my GitHub </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EOM;
