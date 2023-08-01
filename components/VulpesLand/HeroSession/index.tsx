import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';
import imgHandArrow from '../../../public/LANDPAGE/hand-arrow-down.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HeroSession = () => {
  const [ lang ] = useTypewriter({
    words: ['Inglês', 'Espanhol', 'Alemão', 'Francês'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  const [ ola ] = useTypewriter({
    words: ['Hello_', 'Hola_', 'Hallo_', 'Bonjour_'],
    loop: 0,
    typeSpeed: 0,
    deleteSpeed: 0,
    delaySpeed: 2000,
  });

  return (
    <div className={styles.container} id='header'>
      <div className={styles.intro}>
        <span className={styles.gray}>{ola}</span>
        <h1 className={styles.title}>Aprenda <span className={styles.languages}>{lang}</span>
        <span className={styles.cursor}>
          <Cursor/>
        </span>
        </h1>
        <p className={styles.paragr}>de forma personalizada e com foco no seu objetivo</p>
        {/* <div className={styles.know__more__session}>
          <span className={styles.know__more}>Conheça a Vulpes</span>
          <div className={styles.hand__arrow}>
            <Image
              src={imgHandArrow}
              alt="Icone de mão apontando para baixo"
              width={24}
              height={24}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSession;
