"use client";
import styles from "./Menu.module.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Overlay from "./Overlay/Overlay";
import Inner from "./Inner/Inner";
import SidePanel from "./SidePanel/SidePanel";

export const useSCrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};

export default function Menu({ children }) {
  const showMenu = useSCrollPosition();
  const [isPushed, setIsPushed] = useState(false);
  const toggleMenuOpen = () => {
    setIsPushed(!isPushed);
  };

  const closeMenu = () => {
    setIsPushed(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Navbar
          isPushed={isPushed}
          showMenu={showMenu}
          onClick={toggleMenuOpen}
        />
        <SidePanel
          isPushed={isPushed}
          showMenu={showMenu}
          onClick={closeMenu}
        />
        <Inner>{children}</Inner>
        <Overlay isPushed={isPushed} onClick={closeMenu} />
      </div>
    </>
  );
}
