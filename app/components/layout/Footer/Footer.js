import styles from "./Footer.module.css";
import { GithubIcon } from "./GithubIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <p className={styles.sitename}>© jnpi Portfolio Blog</p>
        <Link
          href="https://github.com/jnpi-t6/jnpi-portfolio-blog"
          className={styles.githublink}
        >
          <GithubIcon width="30" />
        </Link>
      </footer>
    </>
  );
}
