import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Frame = () => {
  const router = useRouter();

  const onContainerClick = useCallback(() => {
    router.push("/frame3");
  }, [router]);

  return (
    <div className={styles.div}>
      <div className={styles.div1} />
      <div className={styles.div2} />
      <div className={styles.div3}>Результаты анализа патентов</div>
      <div className={styles.div4} />
      <div className={styles.div5} />
      <img className={styles.icon} alt="" src="/@2x.png" />
      <div className={styles.div6}>
        <span className={styles.txt}>
          aspirin
          UIPAC format
        </span>
      </div>
      <div className={styles.div7} onClick={onContainerClick}>
        <div className={styles.div8} />
        <div className={styles.div9}>Назад</div>
      </div>
      <div className={styles.div10}>
        <div className={styles.div11} />
        <div className={styles.div12}>Скачать</div>
        <img className={styles.icon1} alt="" src="/1@2x.png" />
      </div>
    </div>
  );
};

export default Frame;
