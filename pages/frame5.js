import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame5.module.css";

const Frame5 = () => {
  const router = useRouter();

  const onContainerClick = useCallback(() => {
    router.push("/frame4");
  }, [router]);

  return (
    <div className={styles.div}>
      <div className={styles.div1} />
      <div className={styles.div2} />
      <div className={styles.div3} />
      <div className={styles.div4} />
      <div className={styles.div5} onClick={onContainerClick}>
        <div className={styles.div6} />
        <div className={styles.div7}>Назад</div>
      </div>
      <div className={styles.div8}>
        <img className={styles.smilesIcon} alt="" src="/smiles@2x.png" />
        <div className={styles.smiles}>
          <span className={styles.smilesTxt}>
            <p className={styles.p}>{`Анализировать `}</p>
            <p className={styles.p}>Smiles</p>
          </span>
        </div>
        <div className={styles.div9}>
          <div className={styles.child} />
          <div className={styles.item} />
        </div>
      </div>

  <div className={styles.div10}>


 
    <div className={styles.scroll-container}>
      {/* Ваш контент здесь */}
    </div>

      

  
        <img className={styles.molIcon} alt="" src="/-mol@2x.png" />
        <div className={styles.mol}>Выводить всё в MOL</div>
      </div>
      <div className={styles.div12}>Настройки</div>
    </div>
  );
};

export default Frame5;
