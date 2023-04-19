import styles from './styles.module.css';
import Image from 'next/image';
import img_Cecilia from '../../public/PESSOAS/foto-Cecilia-Martins.png';
import img_Gabriel from '../../public/PESSOAS/foto-Gabriel Drummond.png';
import img_Isabela from '../../public/PESSOAS/foto-Isabela Assumpção.png';
import img_Polly from '../../public/PESSOAS/foto-Pollyana-Helena.png';
import img_Sharon from '../../public/PESSOAS/foto-Sharon Brito.png';
import img_Guilherme from '../../public/PESSOAS/foto-Guilherme-Rodrigues.png';

const BonusSession = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Pessoas que já impactamos em <br />nossos últimos eventos:</div>
            <div className={styles.cards__group}>
                <div className={styles.card}>
                    <span className={styles.people__brief}>
                    &quot;Eu ameii
                        Foi muito bom interagir com outras pessoas
                        E ajuda desenvolver mais a conversação
                        Brilharam muito com esse projeto🥰&quot;
                    </span>
                    <div className={styles.user__card}>
                        <div className={styles.image__circle}>
                            <Image
                                src={img_Cecilia}
                                alt="Imagem de Usuário da Cecilia Martins"
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className={styles.card__texts}>
                            <span className={styles.people__name}>Cecilia Martins</span>
                            <span className={styles.people__office}>Listener - Business Club</span>
                        </div>
                    </div>
                    <div className={styles.break__line}></div>
                </div>

                <div className={styles.card}>
                    <span className={styles.people__brief}>
                    &quot;Gostei muito, de verdade. Várias dicas sobre como se comportar em uma entrevista, ao se fazer uma conexão profissional... Palavras e expressões chaves para manter o diálogo e profissionalismo durante o contato com stakeholders&quot;
                    </span>
                    <div className={styles.user__card}>
                        <div className={styles.image__circle}>
                            <Image
                                src={img_Gabriel}
                                alt="Imagem de Usuário da Gabriel Drummond"
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className={styles.card__texts}>
                            <span className={styles.people__name}>Gabriel Drummond</span>
                            <span className={styles.people__office}>Listener - Business Club</span>
                        </div>
                    </div>
                    <div className={styles.break__line}></div>
                </div>

                <div className={styles.card}>
                    <span className={styles.people__brief}>
                    &quot;Primeiramente parabenizo a Vulpes pela iniciativa do Business Club. O evento estava bem organizado e dinâmico. O mais interessante foi a troca entre pessoas de diferentes áreas, além de treinar o ouvindo e a mente a entender diferentes sotaques. Acredito que trazer nos próximos eventos alguém externo, de alguma empresa/ empreender seria bem bacana! Ansiosa para o próximo evento!&quot;
                    </span>
                    <div className={styles.user__card}>
                        <div className={styles.image__circle}>
                            <Image
                                src={img_Isabela}
                                alt="Imagem de Usuário da Isabela Assumpção"
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className={styles.card__texts}>
                            <span className={styles.people__name}>Isabela Assumpção</span>
                            <span className={styles.people__office}>Listener - Business Club</span>
                        </div>
                    </div>
                    <div className={styles.break__line}></div>
                </div>

                <div className={styles.card}>
                    <span className={styles.people__brief}>
                    &quot;Olá, eu amei o business club. Confesso que fiquei bem tímida e com medo de falar. Mas vi pessoas de vários níveis de inglês na sala e me senti melhor… tinham umas mais avançadas e outras menos em relação a mim. Além disso foram tópicos importantíssimos porque são assuntos realmente interessantes em um dia a dia de trabalho, de uma empresa e de uma conversa mais intelectual. Faria mil vezes!!!&quot;
                    </span>
                    <div className={styles.user__card}>
                        <div className={styles.image__circle}>
                            <Image
                                src={img_Polly}
                                alt="Imagem de Usuário da Pollyana Helena"
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className={styles.card__texts}>
                            <span className={styles.people__name}>Pollyana Helena</span>
                            <span className={styles.people__office}>Listener - Business Club</span>
                        </div>
                    </div>
                    <div className={styles.break__line}></div>
                </div>

                <div className={styles.card}>
                    <span className={styles.people__brief}>
                    &quot;O Business Club foi maravilhoso, foi minha primeira vez conversando em inglês e eu me senti a vontade para isso.&quot;
                    </span>
                    <div className={styles.user__card}>
                        <div className={styles.image__circle}>
                            <Image
                                src={img_Sharon}
                                alt="Imagem de Usuário da Sharon Brito"
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className={styles.card__texts}>
                            <span className={styles.people__name}>Sharon Brito</span>
                            <span className={styles.people__office}>Listener - Business Club</span>
                        </div>
                    </div>
                    <div className={styles.break__line}></div>
                </div>

                <div className={styles.card}>
                    <span className={styles.people__brief}>
                        &quot;Foi uma experiência ótima devido a didática utilizada pela Vulpes, algo que não presenciei em nenhum outro curso de inglês que fiz antes; além disso, perdi o medo que tinha de me comunicar em outra língua vendo que outras pessoas passavam pela mesma situação que eu, ver elas tentarem me encorajou.&quot;
                    </span>
                    <div className={styles.user__card}>
                        <div className={styles.image__circle}>
                            <Image
                                src={img_Guilherme}
                                alt="Imagem de Usuário da Guilherme Rodrigues"
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className={styles.card__texts}>
                            <span className={styles.people__name}>Guilherme Rodrigues</span>
                            <span className={styles.people__office}>Listener - Business Club</span>
                        </div>
                    </div>
                    <div className={styles.break__line}></div>
                </div>
            </div>
        </div>
    );
};

export default BonusSession;