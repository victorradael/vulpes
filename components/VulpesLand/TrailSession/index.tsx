import { useState } from 'react';
import IndividualTrail from './IndividualTrail';
import IndividualTrailContent from './IndividualTrailContent';
import './styles.module.css';
import styles from './styles.module.css';

const TrailSession = () => {
  const [trailIndexSelected, setTrailIndexSelected] = useState(0);

  const indexSelect = (args: number) => {
    const newIndex = args;
    setTrailIndexSelected(newIndex);
  }

  return (
    <div id='method' className={styles.container}>
      <h4 className={styles.trails__title}>Estude com as <span className={styles.text__red}>melhores trilhas</span> rumo a fluência que existem no mercado</h4>
      <div className={styles.trails__component}>
        <div className={styles.main__box}>
          <IndividualTrail indice={0} indSelect={trailIndexSelected} onTrailSelection={indexSelect}/>
          <IndividualTrail indice={1} indSelect={trailIndexSelected} onTrailSelection={indexSelect}/>
          <IndividualTrail indice={2} indSelect={trailIndexSelected} onTrailSelection={indexSelect}/>
          <IndividualTrail indice={3} indSelect={trailIndexSelected} onTrailSelection={indexSelect}/>
          <IndividualTrail indice={4} indSelect={trailIndexSelected} onTrailSelection={indexSelect}/>
        </div>
        <IndividualTrailContent indice={trailIndexSelected}/>
      </div>
    </div>
  );
};

export default TrailSession;
