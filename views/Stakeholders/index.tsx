import './styles.module.css';
import styles from './styles.module.css';
import Stakeholders from '../../components/Stakeholders';
import modalType from '../../interface/modalType';

const StakeholdersView = ({ modalChangers }: modalType) => {
  return (
    <div className={styles.container}>
        <Stakeholders modalChangers={modalChangers}/>
    </div >
  );
};

export default StakeholdersView;
