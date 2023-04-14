import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';

const HeadFooter = () => {

    return (

        <div className={styles.container}>
            <div className={styles.paragraph}>Aprenda o inglês que realmente funciona, à altura dos seus objetivos e dos seus negócios.</div>
            <Button href='#header' className={styles.button}><b>QUERO PARTICIPAR DO BUSINESS CLASS</b></Button>
        </div>
    );
};

export default HeadFooter;
