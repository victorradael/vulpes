import { useState } from 'react';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.module.css';
import styles from './styles.module.css';
import img from '../../public/LOGO_EVENTO.png';

const CardForm = () => {
    const [numeroTelefone, setNumeroTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');


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
            <Form.Control
                type="password"
                id="name"
                placeholder='Nome completo'
                className={styles.input}
            />
            <Form.Control
                type="email"
                id="email"
                placeholder='E-mail'
                className={styles.input}
            />
            <Button href="mailto:xpx@xpx.com?subject=Assunto do email&body='Conteúdo do email'" className={styles.button}><b>QUERO PARTICIPAR DO BUSINESS CLASS</b></Button>
            <p className={styles.small_text}><b>10 DE ABRIL (SEGUNDA-FEIRA), ÀS 20H <br />BUSINESSCLASS 100% ONLINE E GRATUITA</b></p>
        </div>
    );
};

export default CardForm;
