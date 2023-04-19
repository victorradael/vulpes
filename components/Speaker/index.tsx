import styles from './styles.module.css';
import Image from 'next/image';
import img_Rebecca from '../../public/PESSOAS/speaker_Rebecca.png';
import img_br from '../../public/br-foto.png';
import img_us from '../../public/us-foto.png';
import img_logo_back from '../../public/carimbo-vulpes-back.png';
import img_logo_front from '../../public/logo-vulpes-azul.png';

const SpeakerSession = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Conheça a Speaker do evento:</span>
            
            <div className={styles.apresentation__line}>
                <div className={styles.images__area}>
                    <div className={styles.image__speaker}>
                        <Image
                            src={img_Rebecca}
                            alt="Imagem da apresentadora do evento Rebecca Seabra"
                            width={294}
                            height={392}
                        />
                    </div>

                    <div className={styles.image__flags__area}>
                        <div className={styles.image__flag__br}>
                            <Image
                                src={img_br}
                                alt="Imagem da bandeira do Brasil"
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className={styles.image__flag__us}>
                            <Image
                                src={img_us}
                                alt="Imagem da bandeira dos Estados Unidos"
                                width={64}
                                height={64}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.about__speaker}>
                    <div className={styles.title__area}>
                        <span className={styles.title__speaker}>Rebecca Seabra</span>
                        <span className={styles.tag__speaker}>SPEAKER</span>
                    </div>
                    <span className={styles.subtitle__speaker}>Founder e CEO - Vulpes Idiomas</span>
                    <span className={styles.bio__speaker}>
                        About me
                    </span>
                    <span className={styles.paragraph__speaker}>
                        Ensina idiomas estrangeiros a mais de 10 anos com foco nas melhores estratégias comunicativas do mundo dos negócios. Está na missão de educar e desenvolver pessoas, para que se tornem grandes profissionais qualificados em negociações asertivas.
                        <br />
                        <br />
                        Já inpulsionou a comunicação de mais de 200 clientes em palestras, treinamentos, mentorias e projetos voltados ao desenvolvimento de profissionais dos negócios e da indústria.
                    </span>
                </div>
            </div>

            <div className={styles.logo}>
                <div className={styles.image__logo__back}>
                    <Image
                        src={img_logo_back}
                        className={styles.image__inside__back}
                        alt="Imagem da carimbo da Vulpes"
                        width={187}
                        height={187}
                        />
                </div>
                <div className={styles.image__logo__front}>
                    <Image
                        src={img_logo_front}
                        className={styles.image__inside__front}
                        alt="Imagem da logo azul da Vulpes"
                        width={75}
                        height={90}
                    />
                </div>
            </div>
        </div>
    );
};

export default SpeakerSession;