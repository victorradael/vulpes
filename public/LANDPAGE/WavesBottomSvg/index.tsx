import * as React from 'react'
import './styles.module.css';
import styles from './styles.module.css';

type Colors = {
  color__1: string,
  color__2: string
}

const WavesBottomSvg = ({ ...props }: Colors) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.top__wave}>
    <path fill={props.color__2} fill-opacity="1" d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,160C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    {/* <path fill={props.color__2} fill-opacity="1" d="M0,224L40,213.3C80,203,160,181,240,186.7C320,192,400,224,480,218.7C560,213,640,171,720,170.7C800,171,880,213,960,197.3C1040,181,1120,107,1200,96C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path> */}
    <path fill={props.color__1} fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,85.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    {/* <path fill={props.color__2} fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,48C320,32,400,32,480,58.7C560,85,640,139,720,138.7C800,139,880,85,960,80C1040,75,1120,117,1200,117.3C1280,117,1360,75,1400,53.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path> */}

  </svg>
);

export default WavesBottomSvg;