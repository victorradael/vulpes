import styles from './styles.module.css';

const DataSession = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Nossos propulsores:</span>
            <div className={styles.line}>
                <div className={styles.column__value}>
                    <div className={styles.line__info}>
                        <span className={styles.line__value}>+250</span>
                        <span className={styles.line__unit}>mil</span>
                    </div>
                    <div className={styles.break__line}></div>
                    <span className={styles.line__detail}>Clientes impactados pela Vulpes</span>
                </div>

                <div className={styles.column__value}>
                    <div className={styles.line__info}>
                        <span className={styles.line__value}>+20</span>
                        <span className={styles.line__unit}>multinacionais</span>
                    </div>
                    <div className={styles.break__line}></div>
                    <span className={styles.line__detail}>Contrataram nossos alunos</span>
                </div>

                <div className={styles.column__value}>
                    <div className={styles.line__info}>
                        <span className={styles.line__value}>72</span>
                        <span className={styles.line__unit}>%</span>
                    </div>
                    <div className={styles.break__line}></div>
                    <span className={styles.line__detail}>Dos cargos que mais remuneram, exigem inglês</span>
                </div>
            </div>
        </div>
    );
};

export default DataSession;