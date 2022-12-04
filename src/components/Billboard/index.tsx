import styles from "./styles.module.css";
import fullLogo from "../../../public/logo_full.svg";
import Image from "next/image";

const Billboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image} />

      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src={fullLogo} alt="Logo Vulpes Idiomas" />
        </div>

        <div className={styles.text}>
          <span>
            <b>100% on-line. Somente para você. </b>
          </span>
          <h1>Aprendizado insubstituível.</h1>

          <p className={styles.text_bigger}>
            Nosso objetivo é construir a expressão no mundo. <br />
            Com você, onde você estiver.
          </p>
          <div className={styles.button_box}>
            <a className={styles.button} href="#em_breve">
              Em breve
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
