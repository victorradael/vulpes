import styles from "./styles.module.css";
import Figure from "react-bootstrap/Figure";
import Link from "next/link";

export const WorldPortals = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Os portais do mundo</h1>
        <p>
          Conheça os idiomas que a Vulpes oferece. Clicando em “Saiba Mais”,
          você tem acesso aos motivos pelos quais aprender cada um desses
          idiomas abrirá os portais do mundo para você chegar mais longe,
          caminhando com seus próprios pés.
        </p>
        <Link href="#text">Saiba Mais</Link>
      </div>

      <div className={styles.cards}>
        <Figure>
          <Figure.Image
            width={700}
            height={600}
            alt="171x180"
            src="flags.jpg"
            className={styles.image}
          />
        </Figure>
      </div>
    </div>
  );
};
