import './styles.module.css';
import styles from './styles.module.css';
import SpeakerSession from '../../components/Speaker';

const SpeakerView = () => {
  return (
    <div className={styles.container}>
      <SpeakerSession />
    </div >
  );
};

export default SpeakerView;
