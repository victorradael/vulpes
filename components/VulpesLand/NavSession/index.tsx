import './styles.module.css';
import styles from './styles.module.css';
import SvgComponent from '../../../public/LogoVulpes';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { contactAgent } from '../../../public/Assets/Contact-Agent';

const NavSession = () => {

  return (
    <div className={styles.container} id='header'>
      <div className={styles.logo}>
        <SvgComponent />
      </div>

      <div className={styles.sessions}>
        <span className={styles.session}>
          Metodologia
        </span>
        {/* <span className={styles.session}>
          Fundadora
        </span>
        <span className={styles.session}>
          Depoimentos
        </span>
        <span className={styles.session}>
          Dúvidas
        </span> */}
      </div>

      <Button className={styles.button}>
          <div className={styles.legend__button}>
              <Link href={contactAgent} target='_blank'>
                  <a target="_blank" rel="noopener noreferrer" className={styles.remove__style}>
                    Entre em Contato
                  </a>
              </Link>
          </div>
      </Button>
    </div>
  );
};

export default NavSession;
