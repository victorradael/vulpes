import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.module.css';
import styles from './styles.module.css';
import img from '../../public/LOGO_EVENTO.png';

const CardForm = () => {
    const [showToast, setShowToast] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [lgpd, setLgpd] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ name, email, agree_lgpd: lgpd }),
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json());

        setMessage(response.message);
        setShowToast(true);
    };

    const isFormValid = () => {
        return name !== '' && name.length > 4 && email !== '' && email.length > 8 && lgpd === true;
    };

    const handleCheckboxChange = () => {
        setLgpd(!lgpd);
    };

    return (

        <div className={styles.form_box}>
            <Image
                src={img}
                alt="Logo do evento Vulpes Business Class"
                width={194}
                height={72}
            />
            <h1 className={styles.titulo}>
                Para você, não basta saber <br />inglês. Você precisa falar inglês <br />com clareza e excelência.
            </h1>
            <p className={styles.small_text}>Aqui, você encontra inglês para negócios, na prática, <br /><b>à altura do profissional que você é.</b></p>
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    type="text" value={name} onChange={(event) => setName(event.target.value)}
                    placeholder='Nome completo'
                    className={styles.input}
                />
                <Form.Control
                    type="email" value={email} onChange={(event) => setEmail(event.target.value)}
                    placeholder='E-mail'
                    className={styles.input}
                />
                <div className={styles.line}>
                    <input className={styles.check} type="checkbox" required name="LGPD" onChange={handleCheckboxChange} checked={lgpd} />
                    <p className={styles.small_text}>Estou de acordo com <a href="/politica-privacidade"><strong>Política de Privacidade</strong></a> da Vulpes Idiomas</p>
                </div>

                <Button type='submit' className={styles.button} disabled={!isFormValid()}><b>QUERO PARTICIPAR DO BUSINESS CLASS</b></Button>
                <p className={styles.small_text}><b>10 DE ABRIL (SEGUNDA-FEIRA), ÀS 20H <br />BUSINESSCLASS 100% ONLINE E GRATUITA</b></p>
            </Form>

            <Toast show={showToast} onClose={() => setShowToast(false)} autohide delay={3000} className={styles.toast}>
                <Toast.Body >{message}</Toast.Body>
            </Toast>

        </div>
    );
};

export default CardForm;
