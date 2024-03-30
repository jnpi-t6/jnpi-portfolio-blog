import styles from "./Navbar.module.css";
import MenuButton from "./MenuButton/MenuButton";

export default function Navbar({ isPushed, showMenu, onClick }) {
  return (
    <>
      <nav className={showMenu ? styles.hidden : styles.show}>
        <MenuButton isPushed={isPushed} onClick={onClick} />
      </nav>
    </>
  );
}
