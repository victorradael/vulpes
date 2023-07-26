import NavSession from '../../../components/VulpesLand/NavSession';
import './styles.module.css';
import styles from './styles.module.css';

const NavView = () => {
  return (
    <div className={styles.container} id='header'>
      <NavSession></NavSession>
    </div >
  );
};

export default NavView;
