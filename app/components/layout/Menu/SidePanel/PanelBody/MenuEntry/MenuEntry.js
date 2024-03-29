import styles from "./MenuEntry.module.css";
import Link from "next/link";

// onClickのプロップ渡して、メニューリンク選択後に閉じるようにする
export default function MenuEntry({ href, onClick, children }) {
  return (
    <>
      <Link
        href={`${href}`}
        className={styles.entries}
        onClick={onClick}
        role="button"
      >
        {children}
      </Link>
    </>
  );
}
