import styles from "./styles.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <Link href="#text">Você é importante.</Link>
        <h1>Entraremos em contato</h1>
        <p>
          Deixe abaixo seu nome, e-mail e finalidade e em breve receberá o
          contato de uma de nossas Raposinhas.
        </p>
      </div>

      <div className={styles.cards}>
        <Form className={styles.form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="seu@email.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Assunto</Form.Label>
            <Form.Control type="text" placeholder="O que deseja saber?" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};
