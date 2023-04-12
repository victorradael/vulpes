import './styles.module.css';
import styles from './styles.module.css';
import LearnCards from '../../components/LearnCards';
import Image from 'next/image';
import img from '../../public/Logo-branca.png';

const LearnCardsView = () => {
  return (
    <div className={styles.container}>
        <LearnCards />
        <div className={styles.image__container}>
            <Image
                className={styles.image__logo}
                src={img}
                alt="Logo branca Vulpes"
                width={80}
                height={80}
            />
        </div>
    </div >
  );
};

export default LearnCardsView;
