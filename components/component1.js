import styles from "./component1.module.css";

const Component1 = () => {
  return (
    <div className={styles.component1}>
      <div className={styles.component1Child} />
    </div>
  );
};

export default Component1;
