import { QuestionType } from '../questions-expand';
import './styles.module.css';
import styles from './styles.module.css';

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";


type ExpandMenu = {
  opened: string;
  question: QuestionType;
  onMenuExpanded?: any;
}

const ExpandMenu = (props: ExpandMenu) => {
  const expandMenu = () => {
    const title = props.question.TITLE;
    props.onMenuExpanded(title);
  }
  
  return (
    <div className={props.opened === props.question.TITLE ? styles.container__open : styles.container} onClick={() => expandMenu()}>
      <div className={props.opened === props.question.TITLE ? styles.title__row__open : styles.title__row}>
        <h3 className={styles.menu__title}>{props.question.TITLE}</h3>
        {props.opened === props.question.TITLE ? <IoIosArrowDown className={styles.icon}/> : <IoIosArrowForward className={styles.icon}/>}
      </div>
      {props.opened === props.question.TITLE ? <p className={styles.menu__paragr}>{props.question.DESCRIPTION}</p> : ''}
    </div>
  );
};

export default ExpandMenu;
