import styles from "./styles.module.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export const OurTeam = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <Link href="#text">Junte-se a nós</Link>
        <h1>Nossa equipe</h1>
        <p>
          Veja quem está por trás das cortinas se dedicando para que você
          encontre a estrutura e a atenção que somente nosso modelo de trabalho
          pode oferecer.
        </p>
      </div>

      <div className={styles.cards}>
        {/* <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="st1.png" />
          <Card.Body>
            <Card.Title>João Guilherme</Card.Title>
            <Card.Text>Diretor Comercial</Card.Text>
          </Card.Body>
        </Card> */}
        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="Rebecca.png" />
          <Card.Body>
            <Card.Title>Rebecca Seabra</Card.Title>
            <Card.Text>Diretora Executiva</Card.Text>
          </Card.Body>
        </Card>

        {/* <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="st3.png" />
          <Card.Body>
            <Card.Title>André da Mata</Card.Title>
            <Card.Text>Diretor de Operações</Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="st4.png" />
          <Card.Body>
            <Card.Title>Eduarda Lima</Card.Title>
            <Card.Text>Diretora Financeira</Card.Text>
          </Card.Body>
        </Card> */}
      </div>
    </div>
  );
};
