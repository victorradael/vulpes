import styles from "./styles.module.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export const TheBestTeachers = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <Link href="#text">Time</Link>
        <h1>Os melhores professores</h1>
        <p>
          Conheça nossos professores e descubra mais sobre as pessoas
          maravilhosas que te acompanharão na jornada do conhecimento e da
          evolução pessoal.
        </p>
      </div>

      <div className={styles.cards}>
        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="Sarah.png" />
          <Card.Body>
            <Card.Title>Sarah</Card.Title>
            <Card.Text>Professora de Inglês</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="Murilo.png" />
          <Card.Body>
            <Card.Title>Murilo</Card.Title>
            <Card.Text>Professor de Inglês</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="Henrique.png" />
          <Card.Body>
            <Card.Title>Henrique</Card.Title>
            <Card.Text>Professor de Francês</Card.Text>
          </Card.Body>
        </Card>

        
      </div>
    </div>
  );
};
