"use client";
import styles from "./Menu.module.css";
import { useState, useEffect, useRef } from "react";
import throttle from "lodash.throttle";
import Navbar from "./Navbar/Navbar";
import Overlay from "./Overlay/Overlay";
import Inner from "./Inner/Inner";
import SidePanel from "./SidePanel/SidePanel";

export default function Menu({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const lastScrollY = useRef(0); // useRefを使用してlastScrollYを初期化

  useEffect(() => {
    lastScrollY.current = window.scrollY; // コンポーネントがマウントされた後にwindow.scrollYを設定
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // スクロールの方向を判定
    const isScrollingUp = currentScrollY < lastScrollY.current;
    const isScrollingDown = currentScrollY > lastScrollY.current;

    // トップの時はナビゲーションバーを表示
    if (currentScrollY === 0) {
      setShowMenu(true);
    }

    // スクロールダウンでナビゲーションバーを非表示
    else if (isScrollingDown) {
      setShowMenu(false);
    }

    // スクロールアップでかつ一定の距離を超えた場合にナビゲーションバーを表示
    else if (isScrollingUp && lastScrollY.current - currentScrollY > 100) {
      setShowMenu(true);
    }

    // `throttle` 関数の中で lastScrollY.current を更新
    lastScrollY.current = currentScrollY;
  };

  const throttledHandleScroll = throttle(handleScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      throttledHandleScroll.cancel(); // クリーンアップ時にthrottleを解除
    };
  }, []);
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
