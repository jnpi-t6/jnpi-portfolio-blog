import styles from "./SidePanel.module.css";
import PanelBody from "./PanelBody/PanelBody";

export default function SidePanel({ isPushed, showMenu, onClick }) {
  return (
    <>
      <div
        isPushed={isPushed}
        className={`${isPushed ? styles.open : styles.close}
          ${showMenu ? styles.hidden : styles.show}
          `}
      >
        <PanelBody onClick={onClick} />
      </div>
    </>
  );
}
