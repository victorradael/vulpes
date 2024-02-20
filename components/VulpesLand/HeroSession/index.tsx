import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';
import cecilia_img from '../../../public/PESSOAS/foto-Cecilia-Martins.png';
import pollyana_img from '../../../public/PESSOAS/foto-Pollyana-Helena.png';
import guilherme_img from '../../../public/PESSOAS/foto-Guilherme-Rodrigues.png';
import more_people_img from '../../../public/PESSOAS/more_people.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HeroSession = () => {
  const [ lang ] = useTypewriter({
    words: ['Inglês', 'Espanhol'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  const [ ola ] = useTypewriter({
    words: ['Hello_', 'Hola_'],
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
        <div className={styles.vulpes_students__line}>
          <div className={styles.students__line}>
            <div className={styles.image__circle_1}>
              <Image
                src={cecilia_img}
                alt="Image of a student called Cecilia"
                width={44}
                height={44}
              />
            </div>
            <div className={styles.image__circle_2}>
              <Image
                src={pollyana_img}
                alt="Image of a student called Pollyana"
                width={44}
                height={44}
              />
            </div>
            <div className={styles.image__circle_3}>
              <Image
                src={guilherme_img}
                alt="Image of a student called Guilherme"
                width={44}
                height={44}
              />
            </div>
            <div className={styles.image__circle_4}>
              <Image
                src={more_people_img}
                alt="Image with an increase simbol, that means have a lots of students more inside Vulpes"
                width={44}
                height={44}
              />
            </div>
          </div>
          <p className={styles.cta__paragr}>Junte-se a <span className={styles.text__blue}>+200</span> alunos na metodologia de aulas mais eficiênte do mercado</p>
        </div>
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
