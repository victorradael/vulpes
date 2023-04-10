import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Image from 'next/image';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.module.css';
import styles from './styles.module.css';

const PresentationText = () => {

    return (

        <div className={styles.container}>
            <h2 className={styles.title}>Hoje você sabe como transmitir autoridade através do seu discurso em inglês?</h2>
            <p className={styles.paragraph}>É exatamente isso que você vai aprender no <b>Vulpes Business Class</b>, uma Masterclass 100% online e gratuita para você aprender na prática <b>um Inglês voltado totalmente para negócios.</b></p>
            <p className={styles.paragraph}>Além de ter a oportunidade de aprimorar o seu <b>Business English</b> na prática você vai estabelecer contatos valiosos para a sua carreira.</p>
            <p className={styles.paragraph}>Inglês no currículo não é mais um diferencial. Inglês de verdade é. A comunicação eficaz, com confiança, sempre vai ser. Simples assim.</p>
            <Button href='#header' className={styles.button}><b>PRECISO APRIMORAR MEU BUSINESS ENGLISH</b></Button>
        </div>
    );
};

export default PresentationText;
