import { skills } from "../SkillCard/config";
import * as Icons from "../SkillCard/icons";
import styles from "./SkillIconList.module.css";

export default function SkillIconList() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p className={styles.text}>Stack</p>
        </div>
        <div className={styles.iconlist}>
          {skills.map((item) => {
            //まとめてexportされたSVGのアイコンとconfigの配列を連携
            const Icon = Icons[item.icon];
            return (
              <div key={item.label} className={styles.icons}>
                <Icon width="50" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
