import styles from "./Inner.module.css";
import { memo } from "react";

const Inner = memo(function Inner({ children }) {
  return (
    <>
      <div className={styles.inner}>{children}</div>
    </>
  );
});

export default Inner;
