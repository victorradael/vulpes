import './styles.module.css';
import styles from './styles.module.css';
import HeadFooter from '../../components/HeadFooter';
import Footer from '../../components/Footer';

const Thumbnail = () => {
  return (
    <div className={styles.container}>
      <HeadFooter />
      <Footer />
    </div >
  );
};

export default Thumbnail;
