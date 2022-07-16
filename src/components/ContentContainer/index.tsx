import styles from "./styles.module.css";

const ContentContainer = ({ ...props }) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ContentContainer;
