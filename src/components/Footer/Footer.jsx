import { useState } from 'react';
import { services, tools, sellers, creatives, atom, legal } from './footerData';
import styles from './Footer.module.sass';

import facebookIcon from '../assets/staticImages/facebook.svg';
import twitterIcon from '../assets/staticImages/twitter.svg';
import instagramIcon from '../assets/staticImages/instagram.svg';
import linkedinIcon from '../assets/staticImages/linkedin.svg';
import youtubeIcon from '../assets/staticImages/youtube.svg';

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderLinks = (title, links, keyName) => (
    <div className={styles.linksItem}>
      <h4
        onClick={() => toggleSection(keyName)}
        className={styles.accordionHeader}
      >
        {title}
        <span
          className={openSections[keyName] ? styles.arrowUp : styles.arrowDown}
        ></span>
      </h4>
      <ul
        className={`${styles.accordionContent} ${
          openSections[keyName] ? styles.open : ''
        }`}
      >
        {links.map(({ title, href }, index) => (
          <li key={index}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div className={styles.linksWrapper}>
        {renderLinks('Services', services, 'services')}
        {renderLinks('Tools', tools, 'tools')}
        <div className={styles.wraperLink}>
          {renderLinks('Sellers', sellers, 'sellers')}
          {renderLinks('Creatives', creatives, 'creatives')}
        </div>
        <div className={styles.wraperLink}>
          {renderLinks('Atom', atom, 'atom')}
          {renderLinks('Legal', legal, 'legal')}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <span>Copyright © 2025 Atom.com</span>
          <div className={styles.dot}></div>
          <a href="#">Consent Preferences</a>
        </div>
        <a href="#" className={styles.approved}>
          <div className={styles.trustPilot}>
            <strong>Excellent</strong>
            <div className={styles.stars}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className={styles.halfStar}></div>
            </div>
            <span>Trustpilot</span>
          </div>

          <div className={styles.ratings}>
            <strong>4.5/ 5</strong>
            <br />
            <span>based on 716 ratings</span>
          </div>
        </a>

        <ul className={styles.social}>
          <li>
            <a href="#">
              <img src={facebookIcon} alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagramIcon} alt="Instagram icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={youtubeIcon} alt="Youtube icon" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
