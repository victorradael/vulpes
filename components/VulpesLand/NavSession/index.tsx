import './styles.module.css';
import styles from './styles.module.css';
import SvgComponent from '../../../public/LogoVulpes';

const NavSession = () => {

  return (
    <div className={styles.container} id='header'>
      <div className={styles.logo}>
        <SvgComponent />
      </div>

      <div className={styles.sessions}>
        <span className={styles.session}>
          Home
        </span>
        <span className={styles.session}>
          Metodologia
        </span>
        <span className={styles.session}>
          Equipe
        </span>
        <span className={styles.session}>
          Depoimentos
        </span>
        <span className={styles.session}>
          Dúvidas
        </span>
      </div>

      <button className={styles.button}>
        Acompanhar Novidades
      </button>
    </div>
  );
};

export default NavSession;
