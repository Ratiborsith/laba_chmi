import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame3.module.css";

const Frame3 = () => {
  const router = useRouter();

  const onContainerClick = useCallback(() => {
    router.push("/frame");
  }, [router]);

  const onContainer1Click = useCallback(() => {
    router.push("/frame4");
  }, [router]);

  return (
    <div className={styles.div}>
      <div className={styles.div1} />
      <div className={styles.div2} />
      <div className={styles.div3} />
      <div className={styles.div4} onClick={onContainerClick}>
        <div className={styles.div5} />
        <div className={styles.div6}>Анализ</div>
      </div>
      <div className={styles.div7} />
      <div className={styles.div8} onClick={onContainer1Click}>
        <div className={styles.div9} />
        <div className={styles.div6}>Назад</div>
      </div>
      <div className={styles.div11}>
        <span className={styles.txt}>
          <p className={styles.p}>{`Загрузка патентных документов `}</p>
          <p className={styles.p}>с химическими формулами</p>
        </span>
      </div>
      <div className={styles.child} />
      <img className={styles.icon} alt="" src="/4@2x.png" />
      <div className={styles.div12}>Загружайте все документы(pdf)</div>
      <div className={styles.div12}>Загружайте все документы(pdf)</div>
      <div className={styles.div14}>Клик</div>
    </div>
  );
};

export default Frame3;
