import Head from 'next/head';
import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Velmondo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/logo.png" alt="Velmondo Logo" className="logo" />
        <h1>Velmondo</h1>
        <select className="language-select">
          <option>English</option>
          <option>Türkçe</option>
          <option>العربية</option>
          <option>Français</option>
          <option>Deutsch</option>
          <option>Español</option>
          <option>Italiano</option>
          <option>Português</option>
          <option>中文</option>
        </select>
      </header>
      <main>
        <p className="coming-soon">We're renewing for you. Coming soon.</p>
        <div className="branches">
          <a href="https://usa.velmondo.com">🇺🇸 Click for USA branch</a>
          <a href="https://ee.velmondo.com">🇪🇪 Click for Estonia branch</a>
          <a href="https://hk.velmondo.com">🇭🇰 Click for Hong Kong branch</a>
          <a href="https://ae.velmondo.com">🇦🇪 Click for Dubai branch</a>
          <a href="https://hu.velmondo.com">🇭🇺 Click for Hungary branch</a>
          <a href="https://tr.velmondo.com">🇹🇷 Click for Turkey branch</a>
        </div>
      </main>
    </div>
  );
}