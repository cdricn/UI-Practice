'use client';

import Logo from '../components/logo';
import Nav from '../components/nav';
import { collection } from "../data/collection";
import styles from './projects.module.css';

export default function Projects() {

  function hoverLeave(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const animStyle = e.currentTarget.children[0] as HTMLElement;
    animStyle.style.clipPath = `
      polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)
    `;
  }

  return (
    <>
      <Nav />
      <div className={styles['logo-container']}>
        <Logo />
      </div>
      <div className={styles['page-header']}>
        <div className={styles['header-wrapper']}>
          <div className={styles['title']}>
            <span>B</span>
            <h1>PROJECTS</h1>
          </div>
          <div className={styles['filters']}>
            <p>All</p>
            <p>Commission</p>
            <p>Personal</p>
            <p>Fan Art</p>
          </div>
        </div>
      </div>
      <main className={styles['artworks-list']}>
        
        <div className={styles['artwork-wrapper']}>
          {collection.map((item, index)=>{
            return (
              <>
                <a href='/' 
                  className={styles['artwork-details']} 
                  onMouseLeave={(e)=>{hoverLeave(e)}}>
                    <div className={styles['artwork-image']}>
                      <img src={item.src} />
                    </div>
                    <div className={styles['artwork-title']}>
                      <span>{index+1}</span>
                      <h2>
                        {item.name}
                      </h2>
                    </div>
                    <p>{item.type}</p>
                </a>
              </>
            )})
          }
        </div>
      </main>
    </>
  )
}