import { useState } from "react";
import SaleBanner from "./components/SaleBanner/SaleBanner";
import Header from "./components/Header/Header";
import SearchInput from "./components/Header/SearchInput/SearchInput";
import MainSection from "./components/MainSection/MainSection";
import Ways from "./components/Ways/Ways";
import Steps from "./components/Steps/Steps";
import Search from "./components/Search/Search";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.sass";

const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const isActive = showSearch ? styles.active : "";
  return (
    <>
      <div className={styles.headerSale}>
        <div className={styles.container}>
          <SaleBanner />
        </div>
      </div>
      <header className={`${styles.header} ${isActive}`}>
        <div className={styles.container}>
          <Header setShowSearch={setShowSearch} showSearch={showSearch} />
        </div>
      </header>

      <div
        className={`${styles.menuOverlay} ${isActive}`}
        onClick={() => setShowSearch(false)}
      />
      <div className={`${styles.searchWidget} ${isActive}`}>
        <div className={styles.container}>
          <SearchInput />
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.container}>
          <MainSection />
        </div>
      </main>

      <section className={styles.ways}>
        <div className={styles.container}>
          <Ways />
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.container}>
          <Steps />
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.container}>
          <Faq />
        </div>
      </section>

      <section className={styles.search}>
        <div className={styles.container}>
          <Search />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default App;
