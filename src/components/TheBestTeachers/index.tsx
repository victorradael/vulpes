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
          <Card.Img className={styles.image} variant="top" src="circle.svg" />
          <Card.Body>
            <Card.Title>Aulas práticas</Card.Title>
            <Card.Text>
              A forma mais funcional e proveitosa de aprender um idioma é
              praticando. Criamos um ambiente de imersão orientada nas aulas
              para que você se torne um comunicador eficiente.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img className={styles.image} variant="top" src="grad.svg" />
          <Card.Body>
            <Card.Title>Respeitamos seu ritmo</Card.Title>
            <Card.Text>
              Nossas aulas são individuais ou em duplas, e sempre serão. Você
              pode avançar no seu tempo, aproveitando A potencial e superando
              suas dificuldades. Aqui, você está no seu lugar.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem", minHeight: "20rem" }}
          className={styles.card}
        >
          <Card.Img
            className={styles.image}
            variant="top"
            src="telescopio.svg"
          />
          <Card.Body>
            <Card.Title>Conforme seu objetivo</Card.Title>
            <Card.Text>
              Conduzimos as aulas baseados em seus objetivos com o idioma.
              Alinhamos as expectativas com honestidade e planejamos o processo
              para te levar até lá.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
