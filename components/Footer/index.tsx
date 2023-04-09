import styles from './styles.module.css';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";


const Footer = () => {

    return (
        <div className={styles.container}>
            <div><Link href="https://www.instagram.com/vulpesidiomas/"><FaInstagram className={styles.icon} /></Link></div>
            <div>Vulpes Idiomas · CNPJ 37.280.016/0001-05 · © 2023</div>
            <div><Link href="/politica-privacidade">Politica de Privacidade</Link></div>
        </div>
    );
};

export default Footer;
