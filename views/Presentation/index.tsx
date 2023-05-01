import './styles.module.css';
import styles from './styles.module.css';
import PresentationText from '../../components/PresentationText';
import modalType from '../../interface/modalType';

const Presentation = ({modalChangers}: modalType) => {
  return (
    <div className={styles.full__container}>
      <div className={styles.tip__card}>
          <p className={styles.tip__card__paragraph}>O <b>Vulpes Business Class</b> é uma Masterclass 100%</p>
          <p className={styles.tip__card__paragraph}>online e gratuita para você aprender na prática a</p>
          <p className={styles.tip__card__paragraph}>falar com propriedade e autenticidade sobre o seu</p>
          <p className={styles.tip__card__paragraph}>trabalho e suas competências em inglês.</p>
      </div>
      <div className={styles.container}>
        <PresentationText modalChangers={modalChangers} />
      </div >
    </div>
  );
};

export default Presentation;
