import styles from "./Inner.module.css";

export default function Inner({ children }) {
  return (
    <>
      <div className={styles.inner}>{children}</div>
    </>
  );
}
