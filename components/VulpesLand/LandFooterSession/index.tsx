import Link from 'next/link';
import './styles.module.css';
import styles from './styles.module.css';
import { FaInstagram } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { contactAgent } from '../../../public/Assets/Contact-Agent';

const LandFooterSession = () => {
  return (
    <div className={styles.container}>

        <div className={styles.footer__top}>
          <div className={styles.paragraph}>Aprenda o inglês que realmente funciona, à altura dos seus objetivos e dos seus negócios.</div>
          
          <Button className={styles.button}>
            <div className={styles.legend__button}>
              <Link href={contactAgent} target='_blank'>
                <a target="_blank" rel="noopener noreferrer" className={styles.remove__style}>
                  Acompanhar Novidades
                </a>
              </Link>
            </div>
          </Button>
        </div>

        <div className={styles.footer__bottom}>
          <div><Link href="https://www.instagram.com/vulpesidiomas/" target='_blank'><a target="_blank" rel="noopener noreferrer" className={styles.remove__style}><FaInstagram className={styles.icon} /></a></Link></div>
          <div className={styles.text}>Vulpes Idiomas · CNPJ 37.280.016/0001-05 · © 2023</div>
          <div><Link href="/politica-privacidade" target='_blank'><a target="_blank" rel="noopener noreferrer" className={styles.remove__style}>Politica de Privacidade</a></Link></div>
        </div>
    </div>
  );
};

export default LandFooterSession;
