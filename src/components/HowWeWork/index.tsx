import styles from "./styles.module.css";
import Figure from "react-bootstrap/Figure";
import Link from "next/link";

export const HowWeWork = () => {
  return (
    <div className={styles.content}>
      <div className={styles.cards}>
        <Figure>
          <Figure.Image
            width={700}
            height={600}
            alt="171x180"
            src="teacher.jpg"
            className={styles.image}
          />
        </Figure>
      </div>

      <div className={styles.text}>
        <h1>Como Trabalhamos</h1>
        <p>
          Conheça mais sobre a Abordagem Comunicativa e nossa filosofia e
          entenda como estruturamos o trabalho para garantir seu sucesso do
          início ao infinito.
        </p>
        <Link href="#text">Saiba Mais</Link>
      </div>
    </div>
  );
};
