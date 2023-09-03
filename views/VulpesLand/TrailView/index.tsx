import './styles.module.css';
import styles from './styles.module.css';
import TrailSession from '../../../components/VulpesLand/TrailSession';

const TrailView = () => {
  return (
    <div className={styles.container} id='header'>
      <TrailSession></TrailSession>
    </div >
  );
};

export default TrailView;
