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
          <p className={styles.aspirin}>Aspirin</p>
          <p className={styles.aspirin}>PubChem CID</p>
          <p className={styles.aspirin}>2244</p>
          <p className={styles.aspirin}>Structure</p>
          <p className={styles.aspirin}>Chemical Safety</p>
          <p className={styles.aspirin}>
            <a
              className={styles.laboratoryChemicalSafetySum1}
              href="https://pubchem.ncbi.nlm.nih.gov/compound/2244#datasheet=LCSS"
              target="_blank"
            >
              <span className={styles.laboratoryChemicalSafety}>
                Laboratory Chemical Safety Summary (LCSS) Datasheet
              </span>
            </a>
          </p>
          <p className={styles.aspirin}>Molecular Formula</p>
          <ul className={styles.c9h8o4Ch3cooc6h4cooh}>
            <li className={styles.ch3cooc6h4cooh}>
              <a
                className={styles.laboratoryChemicalSafetySum1}
                href="https://pubchem.ncbi.nlm.nih.gov/#query=C9H8O4"
                target="_blank"
              >
                <span className={styles.laboratoryChemicalSafety}>C9H8O4</span>
              </a>
            </li>
            <li className={styles.ch3cooc6h4cooh}>CH3COOC6H4COOH</li>
          </ul>
          <p className={styles.aspirin}>Synonyms</p>
          <ul className={styles.c9h8o4Ch3cooc6h4cooh}>
            <li className={styles.ch3cooc6h4cooh}>aspirin</li>
            <li className={styles.ch3cooc6h4cooh}>ACETYLSALICYLIC ACID</li>
            <li className={styles.ch3cooc6h4cooh}>50-78-2</li>
            <li className={styles.ch3cooc6h4cooh}>2-Acetoxybenzoic acid</li>
            <li className={styles.ch3cooc6h4cooh}>2-(Acetyloxy)benzoic acid</li>
          </ul>
          <p className={styles.aspirin}>View More...</p>
          <p className={styles.aspirin}>Molecular Weight</p>
          <p className={styles.aspirin}>180.16 g/mol</p>
          <p className={styles.aspirin}>
            Computed by PubChem 2.1 (PubChem release 2021.05.07
          </p>
          <p className={styles.aspirin}>
            InChI=1S/C9H8O4/c1-6(10)13-8-5-3-2-4-7(8)9(11)12/h2-5H,1H3,(H,11,12)
          </p>
          <p className={styles.aspirin}>C9H8O4</p>
          <p className={styles.aspirin}>C9H8O4</p>
          <p className={styles.aspirin}>CH3COOC6H4COOH</p>
          <p className={styles.aspirin}>&nbsp;</p>
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
