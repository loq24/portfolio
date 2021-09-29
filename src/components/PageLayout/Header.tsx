import styles from "styles/components/PageLayout/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const Router = useRouter();
  const { asPath } = Router;

  return (
    <header className={styles.mainHeader}>
      <Link href="/">
        <div className={styles.logo}>
          Lougie
          <br /> Q Quisel
        </div>
      </Link>
      <nav>
        <ul>
          <li className={asPath === `/` ? `current` : ``}>
            <Link href="/">About</Link>
          </li>
          <li className={asPath === `/recent-projects` ? `current` : ``}>
            <Link href="/recent-projects">Portfolio</Link>
          </li>
          <li className={asPath === `/hire-me` ? `current` : ``}>
            <Link href="/hire-me">Hire Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
