import Link from "next/link";
import { useRouter } from "next/router";
import className from "classnames";

const Header = () => {
  const Router = useRouter();
  const { asPath } = Router;

  return (
    <header className="mainHeader">
      <Link href="/">
        <div className="logo">
          Lougie
          <br /> Q Quisel
        </div>
      </Link>
      <nav>
        <ul>
          <li
            className={className("menuLi", {
              current: asPath === `/`
            })}
          >
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li
            className={className("menuLi", {
              current: asPath === `/recent-projects`
            })}
          >
            <Link href="/recent-projects">
              <a>Portfolio</a>
            </Link>
          </li>
          <li
            className={className("menuLi", {
              current: asPath === `/hire-me`
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
