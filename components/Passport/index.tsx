import styles from './styles.module.css';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import img_Passport from '../../public/passaport-vulpes.png';
import modalType from '../../interface/modalType';
import { RiCloseLine } from "react-icons/ri";

const PassportSession = ({modalChangers}: modalType) => {
    return (
        <div className={styles.container} onClick={() => modalChangers(false)}>
            <div className={styles.area__passport} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content__passport}>
                    <RiCloseLine className={styles.icon} onClick={() => modalChangers(false)}/>
                    <div className={styles.image__passport}>
                        <Image
                            src={img_Passport}
                            alt="Imagem de um passaport custumizado com o simbolo da Vulpes"
                            layout={"fill"}
                            priority={true}
                        />
                    </div>
                    <div className={styles.texts__passaport}>
                        <span className={styles.title__passaport}>Não deixe de participar</span>
                        <span className={styles.subtitle__passaport}>do nosso grupo exclusivo de WhatsApp para este evento.</span>
                    </div>
                    <div className={styles.centralize__button}>
                        <Button href='https://chat.whatsapp.com/JVsaxpR9svH4o7zAei4eU8' className={styles.button} target='_blank'><a target="_blank" rel="noopener noreferrer" className={styles.remove__style}><b>PARTICIPAR DO GRUPO DE WHATSAPP</b></a></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PassportSession;