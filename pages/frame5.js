// frame5.js
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame5.module.css";

const Frame5 = () => {
  const router = useRouter();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onContainerClick = useCallback(() => {
    router.push("/frame4");
  }, [router]);

  const onSwitchClick = useCallback(() => {
    // Инвертируем текущее состояние switch при клике
    setIsSwitchOn((prev) => !prev);
    // Дополнительные действия, если необходимо
  }, []);

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

  
  <div className={styles.div10} onClick={onSwitchClick}>
        <div className={styles.div11}>
          <div className={styles.inner} />
          <div className={styles.rectangleDiv} />
        </div>
        {/* Добавлено состояние switch в качестве класса */}
        <div className={`${styles.mol} ${isSwitchOn ? styles.switchOn : styles.switchOff}`}>
          Выводить всё в MOL
        </div>
      </div>

  
     



  
      <div className={styles.div12}>Настройки</div>
    </div>
  );
};

export default Frame5;
