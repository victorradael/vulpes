import styles from './styles.module.css';
import { BiBrain } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";
import Image from 'next/image';
import img from '../../public/sublinhado.png';

const LearnCards = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.title__1th}>
                    O que você vai aprender no
                    <br />
                    Vulpes Business Class:
                    <div className={styles.title__underlined}>
                        <Image
                            src={img}
                            alt="Logo branca Vulpes"
                            width={86}
                            height={7}
                        />
                    </div>
                </span>
            </div>
            <div className={styles.cards__group}>
                <div className={styles.card}>
                    <div className={styles.card__top}>
                        <BiBrain className={styles.card__icon} />
                        <span className={styles.card__title}>Comunicação inteligente</span>
                    </div>
                    <p className={styles.card__paragraph}>Aprenda a construir estratégias comunicativas em inglês e na prática.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__top}>
                        <FaUserTie className={styles.card__icon__small} />
                        <span className={styles.card__title}>Autoridade Técnica</span>
                    </div>
                    <p className={styles.card__paragraph}>Aplique o inglês na realidade do seu trabalho, de forma significativa e natural.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__top}>
                        <FaChalkboardTeacher className={styles.card__icon} />
                        <span className={styles.card__title}>Aprendizado com especialistas</span>
                    </div>
                    <p className={styles.card__paragraph}>Seja direcionado por professores especialistas no inglês avançado para negócios.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__top}>
                        <TbBulbFilled className={styles.card__icon} />
                        <span className={styles.card__title}>Pensamento elaborado</span>
                    </div>
                    <p className={styles.card__paragraph}>Entenda como as grandes mentes do mundo dos negócios pensam, com o foco direcionado para a sua área de atuação.</p>
                </div>
            </div>
        </div>
    );
};

export default LearnCards;