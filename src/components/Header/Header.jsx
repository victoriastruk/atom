import { useState } from 'react';
import MainMenu from './MainMenu/MainMenu';
import RightMenu from './RightMenu/RightMenu';

import styles from './Header.module.sass';
const Header = ({ showSearch, setShowSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <MainMenu />
      </div>

      <div className={styles.headerRight}>
        <RightMenu showSearch={showSearch} setShowSearch={setShowSearch} />
        <div
          className={`${styles.menuMobileIcon} ${
            isMenuOpen ? styles.active : ''
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* меню */}
      <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <a href="#">Головна</a>
          </li>
          <li>
            <a href="#">Як працює</a>
          </li>
          <li>
            <a href="#">Про нас</a>
          </li>
          <li>
            <a href="#">Контакти</a>
          </li>
        </ul>
      </nav>

      {/* оверлей */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}
    </div>
  );
};

export default Header;
