import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';
import imgRetangulos from '../../../public/LANDPAGE/retangulos.png';
import imgGroupVulpes from '../../../public/LANDPAGE/group-vulpes.png';
import imgHandArrow from '../../../public/LANDPAGE/hand-arrow-down.png';

const HeroSession = () => {
  return (
    <div className={styles.container} id='header'>
      <div className={styles.intro}>
        <span className={styles.gray}>Hello_</span>
        <h1 className={styles.title}>Aprenda <span className={styles.languages}>Inglês</span></h1>
        <p className={styles.paragr}>de forma personalizada e com foco no seu objetivo</p>
        <div className={styles.know__more__session}>
          <span className={styles.know__more}>Conheça a Vulpes</span>
          <div className={styles.hand__arrow}>
            <Image
              src={imgHandArrow}
              alt="Icone de mão apontando para baixo"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      <div className={styles.group__vulpes}>
        <Image
            src={imgGroupVulpes}
            alt="Retrado com o grupo da Vulpes"
            width={459}
            height={564}
        />
      </div>
      <div className={styles.retangulos}>
        <Image
            src={imgRetangulos}
            alt="Retangulos estáticos"
            width={460}
            height={214}
        />
      </div>
    </div>
  );
};

export default HeroSession;
