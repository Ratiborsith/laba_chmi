import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./component.module.css";

const Component = () => {
  const router = useRouter();

  const onContainerClick = useCallback(() => {
    router.push("/frame4");
  }, [router]);

  return (
    <Link className={styles.a} href="/">
      <div className={styles.div} />
      <div className={styles.div1} />
      <img className={styles.icon} alt="" src="/--3@2x.png" />
      <div className={styles.mofContainer}>
        <span className={styles.mofContainer1}>
          <p className={styles.mof}>Добро пожаловать в MOF!</p>
          <p className={styles.mof}>Пожалуйста, авторизуйтесь</p>
        </span>
      </div>
      <div className={styles.div2} onClick={onContainerClick}>
        <div className={styles.div3} />
        <div className={styles.div4}>Войти</div>
      </div>
      <div className={styles.div5}>
        <div className={styles.div6} />
        <div className={styles.div7}>Ваш логин</div>
      </div>
      <div className={styles.div8}>
        <div className={styles.div6} />
        <div className={styles.div10}>Ваш пароль</div>
      </div>
    </Link>
  );
};

export default Component;
