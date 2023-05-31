import DataValuesSession from '../../../components/VulpesLand/DataValuesSession';
import './styles.module.css';
import styles from './styles.module.css';

const DataValuesView = () => {
  return (
    <div className={styles.container} id='header'>
      <DataValuesSession></DataValuesSession>
    </div >
  );
};

export default DataValuesView;
