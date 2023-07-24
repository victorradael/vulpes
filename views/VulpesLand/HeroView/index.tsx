import HeroSession from '../../../components/VulpesLand/HeroSession';
import './styles.module.css';
import styles from './styles.module.css';

const HeroView = () => {
  return (
    <div className={styles.container} id='header'>
      <HeroSession></HeroSession>
    </div >
  );
};

export default HeroView;
