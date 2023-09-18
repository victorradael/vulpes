import { useState } from 'react';

import ExpandMenu from './ExpandMenu';
import { QUESTION } from './questions-expand';
import './styles.module.css';
import styles from './styles.module.css';

const QuestionSession = () => {
  const [menuExpanded, setMenuExpanded] = useState('');

  const menuExpandedHandle = (menuExpandedName: string) => {
    const openedMenu = menuExpandedName;
    if (menuExpandedName === menuExpanded) {
      setMenuExpanded('');
    } else {
      setMenuExpanded(openedMenu);
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.session__title}>Dúvidas frequêntes:</h3>
      <ExpandMenu question={QUESTION.Q1} opened={menuExpanded} onMenuExpanded={menuExpandedHandle}/>
      <ExpandMenu question={QUESTION.Q2} opened={menuExpanded} onMenuExpanded={menuExpandedHandle}/>
      <ExpandMenu question={QUESTION.Q3} opened={menuExpanded} onMenuExpanded={menuExpandedHandle}/>
      <ExpandMenu question={QUESTION.Q4} opened={menuExpanded} onMenuExpanded={menuExpandedHandle}/>
      <ExpandMenu question={QUESTION.Q5} opened={menuExpanded} onMenuExpanded={menuExpandedHandle}/>
      <ExpandMenu question={QUESTION.Q6} opened={menuExpanded} onMenuExpanded={menuExpandedHandle}/>
    </div>
  );
};

export default QuestionSession;
