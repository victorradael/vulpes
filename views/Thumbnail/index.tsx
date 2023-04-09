import './styles.module.css';
import styles from './styles.module.css';
import CardForm from '../../components/CardForm';

const Thumbnail = () => {
  return (
    <div className={styles.container} id='header'>
      <CardForm />
    </div >
  );
};

export default Thumbnail;
