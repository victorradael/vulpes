import ManifestSession from '../../../components/VulpesLand/ManifestSession';
import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';
import stroke from '../../../public/LANDPAGE/conduction-stroke.png';

const ManifestView = () => {
  return (
    <div className={styles.container} id='header'>
      <div className={styles.conduction__stroke}>
        <Image
          src={stroke}
          alt="An arrow to guide to the manifest session"
          width={20}
          height={118}
        />
      </div>
      <ManifestSession></ManifestSession>
    </div >
  );
};

export default ManifestView;
