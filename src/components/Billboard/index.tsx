import styles from "./styles.module.css";
import fullLogo from "../../../public/logo_full.svg";
import Image from "next/image";

const Billboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image} />

      <div className={styles.content}>
        <div>
          <Image
            src={fullLogo}
            alt="Logo Vulpes Idiomas"
            className={styles.logo}
          />
        </div>

        <div>
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
    </div>
  );
};

export default Billboard;
