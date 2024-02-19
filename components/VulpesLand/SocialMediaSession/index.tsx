import InstaPost from './InstaPost';
import { chosePost } from './insta-vulpes-posts.mock';
import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';

import insta_icon from '../../../public/LANDPAGE/icon-insta-vulpes.png';

const SocialMediaSession = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centralize}>
        <div className={styles.row}>
          <div className={styles.column1} data-aos="slide-down" data-aos-offset={1150} data-aos-duration={3000}>
              <InstaPost post_var={chosePost(1)}/>
              <InstaPost post_var={chosePost(2)}/>
              <InstaPost post_var={chosePost(3)}/>
              <InstaPost post_var={chosePost(4)}/>
          </div>
          <div className={styles.column2} data-aos="slide-up" data-aos-offset={1150} data-aos-duration={3000}>
              <InstaPost post_var={chosePost(5)}/>
              <InstaPost post_var={chosePost(6)}/>
              <InstaPost post_var={chosePost(7)}/>
              <InstaPost post_var={chosePost(8)}/>
          </div>
          <div className={styles.column3} data-aos="slide-down" data-aos-offset={1150} data-aos-duration={3000}>
              <InstaPost post_var={chosePost(9)}/>
              <InstaPost post_var={chosePost(10)}/>
              <InstaPost post_var={chosePost(11)}/>
              <InstaPost post_var={chosePost(12)}/>
          </div>
          <div className={styles.column4} data-aos="slide-up" data-aos-offset={1150} data-aos-duration={3000}>
              <InstaPost post_var={chosePost(13)}/>
              <InstaPost post_var={chosePost(14)}/>
              <InstaPost post_var={chosePost(15)}/>
              <InstaPost post_var={chosePost(16)}/>
          </div>
        </div>
      </div>
      <div className={styles.rect}>
        <a href="https://www.instagram.com/vulpesidiomas/" target="_blank" rel="noopener noreferrer" className={styles.remove__style}>
          <div className={styles.image__circle_2}>
              <Image
                  src={insta_icon}
                  alt="Instagram Vulpes Logo"
                  width={44}
                  height={44}
              />
          </div>
          vulpesidiomas
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSession;
