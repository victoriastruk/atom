import { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import styles from './RightMenu.module.sass';

const RightMenu = ({ showSearch, setShowSearch }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <ul className={styles.icons}>
        <li
          className={styles.searchIcon}
          onClick={() => setShowSearch(!showSearch)}
        ></li>
        <li>
          <div className={styles.menuUser}>
            <div className={styles.userIcon}></div>
            <ul className={styles.dropMenuUser}>
              <li className={styles.menuItem}>
                <a href="#">
                  <div className={styles.user}></div>
                  <span>Login</span>
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="#">
                  <div className={styles.user}></div>
                  <span>Signup</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className={styles.menuTelephone}>
            <div className={styles.phoneIcon}></div>
            <ul className={styles.dropMenuTelephone}>
              <li className={styles.menuItem}>
                <a href="tel:1-877-355-3585">
                  <div className={styles.phone}></div>
                  <span>(877) 355-3585</span>
                </a>
              </li>

              <li className={styles.menuItem}>
                <a href="#">
                  <div className={styles.chatIcon}></div>
                  <span>Chat</span>
                </a>
              </li>

              <li className={styles.menuItem}>
                <a href="mailto:service@atom.com">
                  <div className={styles.emailIcon}></div>
                  <span>Email</span>
                </a>
              </li>

              <li className={styles.menuItem}>
                <a href="#">
                  <div className={styles.helpIcon}></div>
                  <span>Help Desk</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">
            <div className={styles.heartIcon}></div>
          </a>
        </li>
      {/* <div  className={`${styles.menuMobileIcon} ${isMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      </ul>
{/* 
      <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#">Головна</a></li>
          <li><a href="#">Як працює</a></li>
          <li><a href="#">Про нас</a></li>
          <li><a href="#">Контакти</a></li>
        </ul>
      </nav>


      {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}  */}
    </>
  );
};

export default RightMenu;
