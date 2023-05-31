import MethodologySession from '../../../components/VulpesLand/MethodologySession';
import './styles.module.css';
import styles from './styles.module.css';

const MethodologyView = () => {
  return (
    <div className={styles.container} id='header'>
      <MethodologySession></MethodologySession>
    </div >
  );
};

export default MethodologyView;
