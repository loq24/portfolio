import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="mainWrapper">
      <Header />
      <main id="pageWrap">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
