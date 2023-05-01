import './styles.module.css';
import styles from './styles.module.css';
import HeadFooter from '../../components/HeadFooter';
import Footer from '../../components/Footer';
import modalType from '../../interface/modalType';

const FooterView = ({ modalChangers }: modalType) => {
  return (
    <div className={styles.container}>
      <HeadFooter modalChangers={modalChangers}/>
      <Footer />
    </div >
  );
};

export default FooterView;
