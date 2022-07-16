import styles from "./styles.module.css";

const Billboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          <b>For Better Future</b>
        </p>
        <h1>
          Best Learning <br /> Opportunities
        </h1>

        <p className={styles.text_bigger}>
          Our goal is to make online
          <br /> education work for everyone
        </p>
      </div>
    </div>
  );
};

export default Billboard;
