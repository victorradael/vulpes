import { choseTrail } from '../trailsContentData';
import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';

interface individualTrailProps {
  active?: boolean;
  indice: number;
  indSelect: number;
  onTrailSelection?: any;
}

const IndividualTrail = (props: individualTrailProps) => {
  const showIndex = () => {
    const idx = props.indice;
    props.onTrailSelection(idx);
  }

  return (
    <div className={props.indSelect !== props.indice ? styles.container : styles.container__sel} onClick={() => showIndex()}>
      <div className={styles.sparkles__image}>
        <Image
          src={choseTrail(props).iconPath}
          alt={'icon of '+ choseTrail(props).name + 'trail of Vulpes'}
          width={32}
          height={32}
        />
      </div>
      <h3 className={styles.trail__title}>{choseTrail(props).name}</h3>
    </div>
  );
};

export default IndividualTrail;
