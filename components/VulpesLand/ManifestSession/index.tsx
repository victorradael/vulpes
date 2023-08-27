import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';
import insignea from '../../../public/LANDPAGE/insignea-raposa-removebg-preview.png';
import sparkles from '../../../public/LANDPAGE/sparkles.png';
import { VscVerifiedFilled } from "react-icons/vsc";

const ManifestSession = () => {

  return (
    <div className={styles.container}>
      <div className={styles.main__box}>
        <div className={styles.know__more__session}>
          <div className={styles.insignia__image}>
            <Image
              src={insignea}
              alt="insignia of a fox to exalt commitment in the service of vulpes"
              width={338}
              height={338}
            />
          </div>
          <span className={styles.know__more}>Selo <span className={styles.text__blue}>Vulpes</span> de Garantia</span>
        </div>
      </div>
      <div className={styles.paragr__place}>
        <span className={styles.title__manifest}><VscVerifiedFilled className={styles.text__blue}/> Manifesto Vulpes</span>
        <p className={styles.paragr}>Imagine dominar um novo idioma, abrir portas para oportunidades e conectar-se globalmente! Na Vulpes, vamos além de simplesmente ensinar idiomas. Nós o inspiramos e capacitamos a abraçar o mundo com <span className={styles.text__blue}>confiança linguística</span>.</p>
        <p className={styles.paragr}>Nossas aulas são totalmente personalizadas para atender às suas necessidades e metas. Aprenda a se comunicar com confiança e fluência, do seu jeito! Esqueça as aulas chatas e mergulhe em um <span className={styles.text__blue}>ambiente dinâmico e interativo</span>, onde você será incentivado a falar e se expressar no idioma escolhido.</p>
        <p className={styles.paragr}>Com nossa metodologia online exclusiva, você aprende no seu próprio ritmo, de <span className={styles.text__blue}>qualquer lugar</span>, a <span className={styles.text__blue}>qualquer hora</span>. E tem mais! Estamos aqui para orientá-lo em quatro idiomas incríveis: Inglês, Espanhol, Alemão e Francês.</p>
      </div>
      <div className={styles.sparkles__image}>
          <Image
            src={sparkles}
            alt="shape of 3 sparkles"
            width={99}
            height={196}
          />
        </div>
    </div>
  );
};

export default ManifestSession;
