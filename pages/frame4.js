import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame4.module.css";

const Frame4 = () => {
  const router = useRouter();

  const onContainerClick = useCallback(() => {
    router.push("/frame5");
  }, [router]);

  const onContainer1Click = useCallback(() => {
    router.push("/frame2");
  }, [router]);

  const onContainer2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContainer3Click = useCallback(() => {
    router.push("/frame3");
  }, [router]);

  return (
    <div className={styles.div}>
      <div className={styles.div1} />
      <div className={styles.div2} />
      <div className={styles.div3} />
      <div className={styles.div4}>Главное меню</div>
      <img className={styles.icon} alt="" src="/5@2x.png" />
      <div className={styles.div5} onClick={onContainerClick}>
        <div className={styles.div6} />
        <div className={styles.div7}>настройки</div>
      </div>
      <div className={styles.div8} onClick={onContainer1Click}>
        <div className={styles.div6} />
        <div className={styles.div10}>сравнение формул</div>
      </div>
      <div className={styles.div11} onClick={onContainer2Click}>
        <div className={styles.div6} />
        <div className={styles.div10}>Завершить работу</div>
      </div>
      <div className={styles.div14} onClick={onContainer3Click}>
        <div className={styles.div15} />
        <div className={styles.div16}>анализ</div>
      </div>
    </div>
  );
};

export default Frame4;
