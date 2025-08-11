import MainMenuDesktop from "./MainMenu/MainMenuDesktop/MainMenuDesktop";
import RightMenu from "./RightMenu/RightMenu";

import styles from "./Header.module.sass";

const Header = ({ showSearch, setShowSearch }) => {
  return (
    <div className={styles.headerInner}>
      <div className={styles.headerLeft}>
        <a to="/" className={styles.logo}>
          <img
            alt="Atom"
            src="https://img.atom.com/public/images/atom-logo.png"
          />
        </a>
      </div>

      <div className={styles.headerMid}>
        <MainMenuDesktop />
      </div>

      <div className={styles.headerRight}>
        <RightMenu showSearch={showSearch} setShowSearch={setShowSearch} />
      </div>
    </div>
  );
};

export default Header;
