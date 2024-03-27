import { skills } from "./config";
import * as Icons from "./icons";
import styles from "./SkillCard.module.css";

export default function SkillCard() {
  return (
    <>
      <div className={styles.sectioncontainer}>
        {skills.map((item) => {
          //まとめてexportされたSVGのアイコンとconfigの配列を連携
          const Icon = Icons[item.icon];
          return (
            <div key={item.label} className={styles.cardcontainer}>
              <div className={styles.iconlabel}>
                <div className={styles.icon}>
                  <Icon width="50" />
                </div>
                <h3 className={styles.label}>{item.label}</h3>
              </div>
              <p className={styles.description}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
