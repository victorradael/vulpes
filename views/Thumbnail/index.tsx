import './styles.module.css';
import styles from './styles.module.css';
import CardForm from '../../components/CardForm';
import modalType from '../../interface/modalType';

const Thumbnail = ({ modalChangers }: modalType) => {
  return (
    <div className={styles.container} id='header'>
      <CardForm modalChangers={modalChangers}/>
    </div >
  );
};

export default Thumbnail;
