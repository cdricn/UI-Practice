import styles from './landing.module.css';
import PageTitle from "../components/pagetitle";
import ImageCollection from '../imageCollection/imageCollection';

export default function Landing() {

  return (
    <main className={styles['wrapper']}>
      <div className={styles['content-container']}>
        <div className={styles['top-container']}>
          <PageTitle />
          <div>
            <span>Light</span>
            <span>/</span>
            <span>Dark</span>
          </div>
        </div>

        <section className={styles['middle-container']}>
          <ImageCollection />
        </section>
        
        <p className={styles['bottom-container']}>
          Some text long <br/>
          Based city
        </p>
      </div>      
    </main>
  )
}
