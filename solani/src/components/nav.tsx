'use client';
import styles from './nav.module.css';
import Logo from './logo';
import { useState } from 'react';
import ThemeSelector from './themeSelector';

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const navOptions = [
    {
      label: 'A',
      title: 'top',
      route: '/'
    },
    {
      label: 'B',
      title: 'project index',
      route: '/projects'
    },
    {
      label: 'C',
      title: 'artworks',
      route: '/artworks'
    },
    {
      label: 'D',
      title: 'info',
      route: '/'
    },
  ];

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
            <Logo />
          </div>
          <ol className={styles['nav-options']} type='A'>
            {navOptions.map((item)=>{
              return (
                <li className={styles['option']}>
                  <a href={item.route}>
                    <span className={styles['label']}>{item.label}</span>
                    <span className={styles['title']}>{item.title}</span>
                  </a>
                </li>
              )})
            }
            <p className={styles['text']}>
              All design and UI <br/>
              were not made by me. <br/>
              No assets were copied.
            </p>
          </ol>
      </nav>
    </>
  )
}