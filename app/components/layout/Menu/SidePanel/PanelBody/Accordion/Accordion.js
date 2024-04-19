import styles from "./Accordion.module.css";

import React, { useState } from "react";
import ArrowDropDownIcon from "../icons/ArrowDropDownIcon";
import ArrowDropUpIcon from "../icons/ArrowDropUpIcon";

export default function Accordion({
  label,
  icon,
  isPushed,
  onClick,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div onClick={handleClick} role="button" className={styles.entries}>
        {icon}
        {label}
        {isOpen ? (
          <ArrowDropUpIcon width="24" />
        ) : (
          <ArrowDropDownIcon width="24" />
        )}
      </div>
      <div
        className={`${styles.content} ${isOpen ? styles.isOpen : ""} ${
          isOpen && isPushed ? styles.isPushed : ""
        }`}
        isOpen={isOpen}
        isPushed={isPushed}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
}
