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
          <Card.Img className={styles.image} variant="top" src="t1.png" />
          <Card.Body>
            <Card.Title>Marcela Fernandes</Card.Title>
            <Card.Text>Professora de Alemão</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="t2.png" />
          <Card.Body>
            <Card.Title>Bryan Cunha</Card.Title>
            <Card.Text>Professor de Inglês</Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="t3.png" />
          <Card.Body>
            <Card.Title>Heloísa Barros</Card.Title>
            <Card.Text>Professora de Inglês</Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="t4.png" />
          <Card.Body>
            <Card.Title>Thiago Correia</Card.Title>
            <Card.Text>Professor de Inglês</Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="t5.png" />
          <Card.Body>
            <Card.Title>Isabelly Cardoso</Card.Title>
            <Card.Text>Professora de Alemão</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="t6.png" />
          <Card.Body>
            <Card.Title>Bianca Moura</Card.Title>
            <Card.Text>Professora de Inglês</Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="t7.png" />
          <Card.Body>
            <Card.Title>Kevin Ferreira</Card.Title>
            <Card.Text>Professor de Francês</Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="t8.png" />
          <Card.Body>
            <Card.Title>Henrique Viana</Card.Title>
            <Card.Text>Professor de Francês</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
