import styles from "styles/components/PageLayout/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <p className={styles.copy}>
        &copy; 2021 Lougie Quisel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
