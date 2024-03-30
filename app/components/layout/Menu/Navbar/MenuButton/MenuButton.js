import styles from "./MenuButton.module.css";
import HamburgerIcon from "./icons/HamburgerIcon";
import HamburgerCloseIcon from "./icons/HamburgerCloseIcon";
import Link from "next/link";

export default function MenuButton({ isPushed, onClick }) {
  return (
    <>
      <div className={styles.logo}>
        <button
          onClick={onClick}
          className={styles.btn}
          type="button"
          aria-label="Menu Button"
          aria-pressed="false"
        >
          {isPushed ? <HamburgerCloseIcon /> : <HamburgerIcon />}
        </button>
        <Link href="/" className={styles.sitetitle}>
          jnpi Portfolio Blog
        </Link>
      </div>
    </>
  );
}
