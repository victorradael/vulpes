import styles from "./styles.module.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export const EachCustomerIsUnique = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Cada Cliente é Único</h1>
        <p>
          Atendimento personalizado para contemplar seu potencial e te conduzir
          à proficiência através do melhor caminho para você. Trabalhamos com
          uma conexão humana ímpar e uma filosofia unificada. Uma experiência
          irreplicável.
        </p>
        <Link href="#text">Saiba Mais</Link>
      </div>

      <div className={styles.cards}>
        <div className={styles.col_one}>
          <Card
            style={{ width: "18rem", minHeight: "20rem" }}
            className={styles.card}
          >
            <Card.Img className={styles.image} variant="top" src="circle.svg" />
            <Card.Body>
              <Card.Title>O Melhor do Mercado</Card.Title>
              <Card.Text>
                Nosso time conta com os melhores professores do mercado e com um
                staff qualificado para te oferecer o suporte completo dentro e
                fora das aulas.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem", minHeight: "20rem" }}
            className={styles.card}
          >
            <Card.Img className={styles.image} variant="top" src="grad.svg" />
            <Card.Body>
              <Card.Title>Suas Conquistas</Card.Title>
              <Card.Text>
                Aulas individuais garantem o alcance dos seus objetivos
                específicos com o idioma.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.col_two}>
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
              <Card.Title>Além do Idioma</Card.Title>
              <Card.Text>
                Nossa prioridade é a evolução pessoal pelo desenvolvimento do
                idioma.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
