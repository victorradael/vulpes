import styles from './styles.module.css';

const LearnCards = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>O que você vai aprender no<br />Vulpes Business Class:</div>
            <div className={styles.cards__group}>
                <p className={styles.card}>VOCÊ TORNARÁ O SEU INGLÊS O SEU MAIOR ALIADO NO TRABALHO</p>
                <p className={styles.card}>VOCÊ APRENDERÁ COMO COLOCAR SEU INGLÊS PARA FUNCIONAR DENTRO DA REALIDADE DO SEU TRABALHO, DE FORMA SIGNIFICATIVA E NATURAL</p>
                <p className={styles.card}>VOCABULÁRIO, EXPRESSÕES E DISCUSSÕES QUE FUNCIONAM NO DIA A DIA DO TRABALHO, E NÃO NOS LIVROS DE INGLÊS</p>
                <p className={styles.card}>ESTRATÉGIAS COMUNICATIVAS PARA SEU INGLÊS FUNCIONAR NA PRÁTICA, E NÃO SÓ NA TEORIA</p>
                <p className={styles.card}>NETWORKING EXCLUSIVO COM PROFISSIONAIS DE DESTAQUE</p>
                <p className={styles.card}>ASSISTÊNCIA DIRECIONADA DE PROFESSORES ESPECIALISTAS EM INGLÊS AVANÇADO PARA NEGÓCIOS</p>
                <p className={styles.card}>FOCO NAS NECESSIDADES DE ENGENHEIROS, CORPORATIVOS, CONSULTORES, TI, ADVOGADOS E EMPREENDEDORES</p>
            </div>
        </div>
    );
};

export default LearnCards;