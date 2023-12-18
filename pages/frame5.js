// frame5.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./frame5.module.css";

const Frame5 = () => {

  const router = useRouter();

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitch1On, setIsSwitch1On] = useState(false);

  const onContainerClick = () => {
    router.push("/frame4");
  };

  const onSwitchClick = () => {
    setIsSwitchOn((prev) => !prev);
    // Дополнительные действия, если необходимо
  };

  const onSwitch1Click = () => {
    setIsSwitch1On((prev) => !prev);
    // Дополнительные действия, если необходимо
  };
  
  return (
    <div className={styles.parentContainer}>
    <div className={styles.div}>
      {/* Оберните все элементы, которые должны быть центрированы */}
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
        <div className={styles.switchContainer1}>
        <div
          className={`${styles.switch1} ${isSwitch1On ? styles.on : styles.off}`}
          onClick={onSwitch1Click}
        />
      </div>
      </div>

      <div className={styles.div10}>
      <div className={styles.switchContainer}>
        <div
          className={`${styles.switch} ${isSwitchOn ? styles.on : styles.off}`}
          onClick={onSwitchClick}
        />
      </div>
        {/* Добавлено состояние switch в качестве класса */}
        <div className={styles.mol}>
          Выводить всё в MOL
        </div>
      </div>

      <div className={styles.div12}>Настройки</div>
    
    </div>
    </div>
  );
};

export default Frame5;
