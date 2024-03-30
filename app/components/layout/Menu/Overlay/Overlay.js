import styles from "./Overlay.module.css";

export default function Overlay({ isPushed, onClick }) {
  return (
    <>
      <div
        className={isPushed ? styles.open : styles.hidden}
        onClick={onClick}
        role="presentation"
      ></div>
    </>
  );
}
