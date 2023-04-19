import './styles.module.css';
import styles from './styles.module.css';
import InspirationSession from '../../components/InspirationSession';

const InspirationView = () => {
  return (
    <div className={styles.container}>
      <InspirationSession />
    </div >
  );
};

export default InspirationView;
