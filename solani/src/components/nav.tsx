'use client';
import styles from './nav.module.css';
import TextLogo from './textLogo';
import { useState } from 'react';
import ThemeSelector from './themeSelector';

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const navOptions = ['top', 'project index', 'artworks', 'info'];

  return (
    <>
      <div id={styles['nav-button-position']}>
        <div className={styles['nav-button-container']}>
            <div className={styles['nav-button']}
              onClick={()=>{setOpenNav(!openNav)}}>
                <span></span>
                <span>{openNav ? 'CLOSE' : 'MENU'}</span>
            </div>

            <div className={styles['theme-container']}
              style={{visibility: `${openNav?'visible':'hidden'}`}}>
              <ThemeSelector />
            </div>
        </div>
      </div>
      <nav className={styles['nav-container']}
        style={{visibility: `${openNav?'visible':'hidden'}`}}>
          <div className={styles['logo-container']}>
            <TextLogo />
          </div>
          <ol className={styles['nav-options']} type='A'>
            {navOptions.map((item)=>{
              return (
                <li className={styles['option']}>
                  <span></span>
                  <a>{item}</a>
                </li>
              )})
            }
          </ol>
      </nav>
    </>
  )
}