import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import { HiArrowNarrowLeft } from "react-icons/hi";
import modalType from '../../interface/modalType';

const HeadFooter = ({ modalChangers }: modalType) => {
    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>Aprenda o inglês que realmente funciona, à altura dos seus objetivos e dos seus negócios.</div>
            <div className={styles.centralize__button}>
                <Button href='#header' onClick={() => setTimeout(() => modalChangers(true), 500)} className={styles.button}>
                    <b>QUERO PARTICIPAR DO BUSINESS CLASS</b>
                    <HiArrowNarrowLeft className={styles.icon} />
                </Button>
            </div>
        </div>
    );
};

export default HeadFooter;
