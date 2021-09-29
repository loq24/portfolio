import styles from "styles/components/PageLayout/PageLayout.module.scss";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <main id="page-wrap">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
