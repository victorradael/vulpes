import styles from './styles.module.css';
import { FiGift } from "react-icons/fi";

const BonusSession = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>E ainda de BONÛS:</div>
            <div className={styles.cards__group}>
                <div className={styles.card}>
                    <div className={styles.card__title}>
                        <FiGift className={styles.icon} />
                        <span className={styles.card__title__words}>BONÛS 01</span>
                    </div>
                    <p className={styles.card__paragraph}>Você terá direito à correção de uma produção escrita, com direcionamento para desenvolver uma linguagem mais precisa, adequada e eficaz, totalmente personalizada às suas necessidades.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__title}>
                        <FiGift className={styles.icon} />
                        <span className={styles.card__title__words}>BONÛS 02</span>
                    </div>
                    <p className={styles.card__paragraph}>Você terá acesso e suporte direto com os nossos especialistas.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__title}>
                        <FiGift className={styles.icon} />
                        <span className={styles.card__title__words}>BONÛS 03</span>
                    </div>
                    <p className={styles.card__paragraph}>Certificado de participação.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__title}>
                        <FiGift className={styles.icon} />
                        <span className={styles.card__title__words}>BONÛS 04</span>
                    </div>
                    <p className={styles.card__paragraph}>Grupo exclusivo de WhatsApp.</p>
                </div>
            </div>
        </div>
    );
};

export default BonusSession;