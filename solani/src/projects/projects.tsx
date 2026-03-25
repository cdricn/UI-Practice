import Logo from '../components/logo';
import Nav from '../components/nav';
import { collection } from "../data/collection";
import styles from './projects.module.css';

export default function Projects() {

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
          {collection.map((item, index)=>{
            return (
              <>
                <div className={styles['artwork-image']}>
                  <img src={item.src} />
                </div>
                <div className={styles['details-wrapper']}>
                  <a className={styles['artwork-details']}>
                    <div className={styles['artwork-title']}>
                      <span>{index}</span>
                      <h2>
                        {item.name}
                      </h2>
                    </div>
                    <p>{item.type}</p>
                  </a>
                </div>
              </>
            )})
          }
      </main>
    </>
  )
}