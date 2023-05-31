import './styles.module.css';
import styles from './styles.module.css';
import WavesTopSvg from '../../../public/LANDPAGE/WavesTopSvg';
import WavesBottomSvg from '../../../public/LANDPAGE/WavesBottomSvg';

enum COLORS {
  color__1 = '#42D3FF30',
  color__2 = '#003049',
}

const DataValuesSession = () => {
  return (
    <div className={styles.container} id='header' style={{ backgroundColor: COLORS.color__2 }}>
      <div className={styles.container__inside} style={{ backgroundColor: COLORS.color__1 }}>
        <div className={styles.line}>
            <div className={styles.column__value}>
                <div className={styles.line__info}>
                    <span className={styles.line__value}>+250</span>
                    <span className={styles.line__unit}>clientes</span>
                </div>
                <div className={styles.break__line}></div>
                <span className={styles.line__detail}>Impactados pela Vulpes</span>
            </div>

            <div className={styles.column__value}>
                <div className={styles.line__info}>
                    <span className={styles.line__value}>+20</span>
                    <span className={styles.line__unit}>multinacionais</span>
                </div>
                <div className={styles.break__line}></div>
                <span className={styles.line__detail}>Contrataram nossos alunos</span>
            </div>

            <div className={styles.column__value}>
                <div className={styles.line__info}>
                    <span className={styles.line__value}>72</span>
                    <span className={styles.line__unit}>%</span>
                </div>
                <div className={styles.break__line}></div>
                <span className={styles.line__detail}>Dos cargos que mais remuneram exigem inglês</span>
            </div>
        </div>

        <WavesTopSvg    color__1={COLORS.color__1} color__2={COLORS.color__2} />
        <WavesBottomSvg color__1={COLORS.color__1} color__2={COLORS.color__2} />
      </div>
    </div>
  );
};

export default DataValuesSession;
