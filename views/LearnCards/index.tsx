import './styles.module.css';
import styles from './styles.module.css';
import LearnCards from '../../components/LearnCards';

const LearnCardsView = () => {
  return (
    <div className={styles.container}>
      <LearnCards />
    </div >
  );
};

export default LearnCardsView;
