import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame2.module.css";

const Frame2 = () => {
  const router = useRouter();

  const onContainerClick = useCallback(() => {
    router.push("/frame1");
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
        <div className={styles.div6}>Вывод</div>
      </div>
      <div className={styles.div7} />
      <div className={styles.div8} onClick={onContainer1Click}>
        <div className={styles.div9} />
        <div className={styles.div6}>Назад</div>
      </div>
      <div className={styles.div11}>Сравнение двух mol-файлов</div>
      <div className={styles.div11}>Сравнение двух mol-файлов</div>
      <div className={styles.div13} />
      <div className={styles.div14} />
      <img className={styles.icon} alt="" src="/4@2x.png" />
      <img className={styles.icon1} alt="" src="/4@2x.png" />
      <div className={styles.div15}>
        Данный режим предназначен для сравнения химических формул в формате mol
      </div>
      <div className={styles.div16}>Клик</div>
      <div className={styles.div17}>Клик</div>
    </div>
  );
};

export default Frame2;
