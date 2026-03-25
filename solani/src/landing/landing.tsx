import styles from './landing.module.css';
import ImageCollection from '../imageCollection/imageCollection';
import ThemeSelector from '../components/themeSelector';

export default function Landing() {

  return (
    <main className={styles['wrapper']}>
      <div className={styles['content-container']}>
        <div className={styles['top-container']}>
          <div className={styles['header']}>
            <span>Header</span>
            <span>Middletitle</span>
            <span>Bottom</span>
          </div>
          <ThemeSelector />
        </div>

        <section className={styles['middle-container']}>
          <ImageCollection />
        </section>
        
        <p className={styles['bottom-container']}>
          Some short text <br/>
          Based city
        </p>
      </div>      
    </main>
  )
}
