import styles from "styles/components/PageLayout/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import className from "classnames";

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
          <li
            className={className(styles.menuLi, {
              [styles.current]: asPath === `/`
            })}
          >
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li
            className={className(styles.menuLi, {
              [styles.current]: asPath === `/recent-projects`
            })}
          >
            <Link href="/recent-projects">
              <a>Portfolio</a>
            </Link>
          </li>
          <li
            className={className(styles.menuLi, {
              [styles.current]: asPath === `/hire-me`
            })}
          >
            <Link href="/hire-me">
              <a>Hire Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
