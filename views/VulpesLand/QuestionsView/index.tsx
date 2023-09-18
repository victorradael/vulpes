import QuestionSession from '../../../components/VulpesLand/QuestionSession';
import './styles.module.css';
import styles from './styles.module.css';

const QuestionsView = () => {
  return (
    <div className={styles.container} id='header'>
      <QuestionSession />
    </div >
  );
};

export default QuestionsView;
