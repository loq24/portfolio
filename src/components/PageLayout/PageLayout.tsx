import Header from "./Header";
import Footer from "./Footer";
import styles from "styles/components/PageLayout/PageLayout.module.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainWrapper}>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default PageLayout;
