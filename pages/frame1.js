import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame1.module.css";

const Frame11 = () => {
  const router = useRouter();

  const onContainerClick = useCallback(() => {
    router.push("/frame2");
  }, [router]);

  return (
    <div className={styles.div}>
      <div className={styles.div1} />
      <div className={styles.div2} />
      <div className={styles.div3}>Результаты сравнения формул</div>
      <div className={styles.div4} />
      <div className={styles.div5} />
      <img className={styles.icon} alt="" src="/2@2x.png" />
      <img className={styles.icon1} alt="" src="/3@2x.png" />
      <div className={styles.div6}>
        <ul className={styles.caffeicAcid34Dihydroxycinn}>
          <li className={styles.aspirin}>aspirin</li>
          <li className={styles.aspirin}>ACETYLSALICYLIC ACID</li>
          <li className={styles.aspirin}>50-78-2</li>
          <li className={styles.aspirin}>2-Acetoxybenzoic acid</li>
          <li>2-(Acetyloxy)benzoic acid</li>
        </ul>
      </div>
      <div className={styles.div7}>
        <ul className={styles.caffeicAcid34Dihydroxycinn}>
          <li className={styles.aspirin}>caffeic acid</li>
          <li className={styles.aspirin}>3,4-Dihydroxycinnamic acid</li>
          <li className={styles.aspirin}>331-39-5</li>
          <li className={styles.aspirin}>trans-caffeic acid</li>
          <li>501-16-6</li>
        </ul>
      </div>
      <div className={styles.div8} onClick={onContainerClick}>
        <div className={styles.div9} />
        <div className={styles.div10}>Назад</div>
      </div>
      <div className={styles.div11}>
        <div className={styles.div12} />
        <div className={styles.div13}>Скачать</div>
        <img className={styles.icon2} alt="" src="/1@2x.png" />
      </div>
    </div>
  );
};

export default Frame11;
